
import { NextResponse } from 'next/server';
import { verifyPaystackSignature } from '@/lib/paystack/signature';
import { verifyPaystack } from '@/lib/paystack/client';
import { recordVerifiedPayment } from '@/lib/db/mysql';
import { marketingConfig } from '@/lib/marketing/config';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-paystack-signature');

  if (!verifyPaystackSignature(rawBody, signature)) {
    return new NextResponse('Invalid signature', { status: 401 });
  }

  try {
    const event = JSON.parse(rawBody) as {
      event?: string;
      data?: {
        id?: number;
        status?: string;
        reference?: string;
        amount?: number;
        currency?: string;
      };
    };

    if (event.event !== 'charge.success') {
      return NextResponse.json({ received: true });
    }

    const data = event.data;

    if (
      !data ||
      typeof data.reference !== 'string' ||
      !/^MICT-[A-Za-z0-9-]+$/.test(data.reference) ||
      data.status !== 'success' ||
      typeof data.id !== 'number' ||
      !Number.isSafeInteger(data.id) ||
      data.id <= 0 ||
      typeof data.amount !== 'number' ||
      !Number.isSafeInteger(data.amount) ||
      data.amount !== marketingConfig.priceMinor ||
      data.currency !== marketingConfig.currency
    ) {
      return NextResponse.json(
        { error: 'Invalid payment event details' },
        { status: 400 },
      );
    }

    // Independently verify the transaction with Paystack.
    const verified = await verifyPaystack(data.reference);

    if (
      verified.status !== 'success' ||
      verified.reference !== data.reference ||
      verified.id !== data.id ||
      verified.amount !== marketingConfig.priceMinor ||
      verified.amount !== data.amount ||
      verified.currency !== marketingConfig.currency ||
      verified.currency !== data.currency
    ) {
      return NextResponse.json(
        { error: 'Paystack transaction verification failed' },
        { status: 400 },
      );
    }

    // Only independently verified Paystack data is recorded.
    await recordVerifiedPayment({
      gateway: 'paystack',
      reference: verified.reference,
      transactionId: verified.id,
      amountMinor: verified.amount,
      currency: verified.currency,
      paidAt: verified.paid_at,
      channel: verified.channel,
      gatewayResponse: verified.gateway_response,
      status: 'success',
      rawEventJson: rawBody,
    });

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 },
    );
  }
}
