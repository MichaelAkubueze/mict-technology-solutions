
import { NextRequest, NextResponse } from 'next/server';
import { marketingConfig } from '@/lib/marketing/config';
import { recordVerifiedPayment } from '@/lib/db/mysql';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

function redirectWithStatus(
  request: NextRequest,
  status: string,
  reference?: string,
): NextResponse {
  const url = new URL('/training/data-analytics', request.url);
  url.searchParams.set('payment', status);

  if (reference) {
    url.searchParams.set('reference', reference);
  }

  return NextResponse.redirect(url);
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const reference = searchParams.get('tx_ref')?.trim();
  const transactionId = searchParams.get('transaction_id')?.trim();

  if (
    !reference ||
    !/^MICT-FLW-[A-Za-z0-9_-]+$/.test(reference) ||
    !transactionId ||
    !/^\d+$/.test(transactionId)
  ) {
    return redirectWithStatus(request, 'verification_failed');
  }

  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secretKey) {
    console.error('Flutterwave secret key is not configured.');
    return redirectWithStatus(request, 'verification_failed', reference);
  }

  try {
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
    const verifiedId = String(payment.id);

    if (
      !/^\d+$/.test(verifiedId) ||
      verifiedId !== transactionId ||
      payment.tx_ref !== reference
    ) {
      throw new Error('Flutterwave transaction identity mismatch');
    }

    const amountNaira = Number(payment.amount);
    const amountMinor = amountNaira * 100;

    const currency = String(payment.currency ?? '').toUpperCase();
    const expectedCurrency = String(marketingConfig.currency).toUpperCase();

    // Reject incorrect amounts and currencies before recording anything.
    if (
      !Number.isFinite(amountNaira) ||
      !Number.isSafeInteger(amountMinor) ||
      amountMinor !== marketingConfig.priceMinor ||
      currency !== expectedCurrency
    ) {
      throw new Error('Flutterwave amount or currency mismatch');
    }

    const successful = payment.status === 'successful';

    const safeStatus =
      successful
        ? 'success'
        : payment.status === 'failed'
          ? 'failed'
          : payment.status === 'cancelled'
            ? 'abandoned'
            : 'pending';

    await recordVerifiedPayment({
      gateway: 'flutterwave',
      reference,
      transactionId: verifiedId,
      amountMinor,
      currency,
      paidAt: payment.created_at,
      channel: payment.payment_type,
      gatewayResponse: payment.processor_response,
      rawEventJson: JSON.stringify(payment),
      status: safeStatus,
    });

    return redirectWithStatus(
      request,
      successful ? 'success' : 'failed',
      reference,
    );
  } catch (error) {
    console.error('Flutterwave callback verification failed:', error);

    return redirectWithStatus(
      request,
      'verification_failed',
      reference,
    );
  }
}
