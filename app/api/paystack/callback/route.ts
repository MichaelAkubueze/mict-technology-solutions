import { NextRequest, NextResponse } from 'next/server';
import { verifyPaystack } from '@/lib/paystack/client';
import { recordVerifiedPayment } from '@/lib/db/mysql';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getTrainingUrl(): URL {
  return new URL(
    '/training/data-analytics',
    'https://micttechnologysolutions.com',
  );
}

function redirectWithStatus(
  status: string,
  reference?: string,
): NextResponse {
  const url = getTrainingUrl();
  url.searchParams.set('payment', status);

  if (reference) {
    url.searchParams.set('reference', reference);
  }

  return NextResponse.redirect(url);
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  // Paystack may return the transaction reference as either
  // "reference" or "trxref".
  const reference =
    searchParams.get('reference')?.trim() ||
    searchParams.get('trxref')?.trim();

  if (!reference || !/^MICT-[A-Za-z0-9_-]+$/.test(reference)) {
    return redirectWithStatus('verification_failed');
  }

  try {
    // Always verify with Paystack's server API.
    // Never rely on query parameters to determine payment success.
    const payment = await verifyPaystack(reference);

    if (payment.reference !== reference) {
      throw new Error('Paystack reference mismatch');
    }

    const amountMinor = Number(payment.amount);
    const currency = String(payment.currency ?? '').toUpperCase();

    const transactionId = Number(payment.id);

    const validTransactionId =
      Number.isSafeInteger(transactionId) && transactionId > 0;

    const validAmount =
      Number.isSafeInteger(amountMinor) &&
      amountMinor > 0;

    const validCurrency = currency.length > 0;

    const successful =
      payment.status === 'success' &&
      validTransactionId &&
      validAmount &&
      validCurrency;

    const safeStatus =
      successful
        ? 'success'
        : payment.status === 'failed'
          ? 'failed'
          : payment.status === 'abandoned'
            ? 'abandoned'
            : 'pending';

    // Persist only a result obtained from Paystack's verification API.
    // The database function also checks that the reference belongs to
    // a checkout for the same gateway, amount and currency.
    await recordVerifiedPayment({
      gateway: 'paystack',
      reference,
      transactionId: payment.id,
      amountMinor,
      currency,
      paidAt: payment.paid_at ?? undefined,
      channel: payment.channel ?? undefined,
      gatewayResponse: payment.gateway_response ?? undefined,
      rawEventJson: JSON.stringify(payment),
      status: safeStatus,
    });

    return redirectWithStatus(
      successful ? 'success' : 'failed',
      reference,
    );
  } catch (error) {
    // Keep detailed diagnostics on the server; do not expose payment
    // provider responses or internal errors to the customer.
    console.error('Paystack callback verification failed:', error);

    return redirectWithStatus(
      'verification_failed',
      reference,
    );
  }
}
