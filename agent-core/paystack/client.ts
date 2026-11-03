export type PaystackInitializeInput = {
  email: string;
  amountMinor: number;
  reference?: string;
  callbackUrl?: string;
  currency?: string;
  metadata?: Record<string, unknown>;
};

export type PaystackInitializeResult = {
  authorization_url: string;
  access_code: string;
  reference: string;
};

export type PaystackVerifyResult = {
  status: boolean;
  data?: {
    id: number | string;
    status: string;
    reference: string;
    amount: number;
    currency: string;
    paid_at?: string;
  };
};

function getSecretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error('PAYSTACK_SECRET_KEY is not configured');
  return key;
}

export async function initializePaystackTransaction(
  input: PaystackInitializeInput,
): Promise<PaystackInitializeResult> {
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: input.email,
      amount: String(input.amountMinor),
      reference: input.reference,
      callback_url: input.callbackUrl,
      currency: input.currency ?? 'NGN',
      metadata: JSON.stringify(input.metadata ?? {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Paystack initialize failed with HTTP ${response.status}`);
  }

  const body = (await response.json()) as {
    status: boolean;
    message?: string;
    data?: PaystackInitializeResult;
  };

  if (!body.status || !body.data) {
    throw new Error(body.message ?? 'Paystack initialize failed');
  }

  return body.data;
}

export async function verifyPaystackTransaction(
  reference: string,
): Promise<PaystackVerifyResult> {
  const response = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getSecretKey()}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Paystack verification failed with HTTP ${response.status}`);
  }

  return (await response.json()) as PaystackVerifyResult;
}
