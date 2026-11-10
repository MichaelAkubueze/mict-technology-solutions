import { timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { recordVerifiedPayment } from '@/lib/db/mysql';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type FlutterwaveWebhookPayload = {
  event?: string;
  data?: {
    id?: number | string;
    tx_ref?: string;
  };
};

type FlutterwaveVerificationResponse = {
  status: string;
  message?: string;
  data?: {
    id: number | string;
    tx_ref: string;
    status: string;
    amount: number;
    currency: string;
    created_at?: string;
    payment_type?: string;
    processor_response?: string;
  } | null;
};

function jsonResponse(status: number, message: string) {
  return NextResponse.json({ status: message }, { status });
}

function secureHashMatch(received: string, expected: string): boolean {
  const receivedBuffer = Buffer.from(received, 'utf8');
  const expectedBuffer = Buffer.from(expected, 'utf8');

  if (receivedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(receivedBuffer, expectedBuffer);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const secretHash = process.env.FLUTTERWAVE_WEBHOOK_SECRET_HASH;
  const receivedHash = request.headers.get('verif-hash') ?? '';

  if (!secretHash) {
    console.error('Flutterwave webhook secret hash is not configured.');
    return jsonResponse(500, 'Webhook configuration error');
  }

  if (!receivedHash || !secureHashMatch(receivedHash, secretHash)) {
    return jsonResponse(401, 'Unauthorized');
  }

  let payload: FlutterwaveWebhookPayload;

  try {
    payload = (await request.json()) as FlutterwaveWebhookPayload;
  } catch {
    return jsonResponse(400, 'Invalid JSON payload');
  }

  // Ignore unrelated Flutterwave events.
  if (payload.event !== 'charge.completed') {
    return jsonResponse(200, 'Event ignored');
  }

  const transactionId = String(payload.data?.id ?? '').trim();
  const reference = String(payload.data?.tx_ref ?? '').trim();

  if (
    !transactionId ||
    !/^\d+$/.test(transactionId) ||
    !reference ||
    !/^MICT-FLW-[A-Za-z0-9_-]+$/.test(reference)
  ) {
    return jsonResponse(400, 'Invalid transaction details');
  }

  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secretKey) {
    console.error('Flutterwave API secret key is not configured.');
    return jsonResponse(500, 'Payment verification configuration error');
  }

  try {
    // Never trust the payment status or amount in the webhook body.
    // Verify the transaction independently with Flutterwave.
    const response = await fetch(
      `https://api.flutterwave.com/v3/transactions/${encodeURIComponent(transactionId)}/verify`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          Accept: 'application/json',
        },
        cache: 'no-store',
        signal: AbortSignal.timeout(15000),
      },
    );

    const result =
      (await response.json()) as FlutterwaveVerificationResponse;

    if (!response.ok || result.status !== 'success' || !result.data) {
      throw new Error('Flutterwave transaction verification failed');
    }

    const payment = result.data;

    if (
      String(payment.id) !== transactionId ||
      payment.tx_ref !== reference
    ) {
      throw new Error('Flutterwave transaction identity mismatch');
    }

    const amountNaira = Number(payment.amount);
    const amountMinor = amountNaira * 100;

    const currency = String(payment.currency ?? '').toUpperCase();

    if (
      !Number.isFinite(amountNaira) ||
      !Number.isSafeInteger(amountMinor) ||
      amountMinor <= 0 ||
      !currency
    ) {
      throw new Error('Flutterwave amount or currency is invalid');
    }

    let paymentStatus: 'success' | 'failed' | 'abandoned' | 'pending';

    if (payment.status === 'successful') {
      paymentStatus = 'success';
    } else if (payment.status === 'failed') {
      paymentStatus = 'failed';
    } else if (payment.status === 'cancelled') {
      paymentStatus = 'abandoned';
    } else {
      paymentStatus = 'pending';
    }

    await recordVerifiedPayment({
      gateway: 'flutterwave',
      reference,
      transactionId,
      amountMinor,
      currency,
      paidAt: payment.created_at ?? undefined,
      channel: payment.payment_type ?? undefined,
      gatewayResponse: payment.processor_response ?? undefined,
      rawEventJson: JSON.stringify({
        webhook: payload,
        verifiedTransaction: payment,
      }),
      status: paymentStatus,
    });

    return jsonResponse(200, 'Webhook processed');
  } catch (error) {
    console.error('Flutterwave webhook processing failed:', error);

    // A non-200 response allows Flutterwave to retry processing.
    return jsonResponse(500, 'Webhook processing failed');
  }
}
