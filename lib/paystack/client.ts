export type PaystackInitializeResponse = {
  authorization_url: string;
  access_code: string;
  reference: string;
};

function secretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error('PAYSTACK_SECRET_KEY is not configured');
  return key;
}

async function paystackFetch<T>(
  path: string,
  init: RequestInit,
): Promise<T> {
  const response = await fetch(`https://api.paystack.co${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(15000),
  });

  let body: {
    status?: boolean;
    message?: string;
    data?: T;
  };

  try {
    body = await response.json();
  } catch {
    throw new Error('Paystack returned an invalid response');
  }

  if (!response.ok || !body.status || !body.data) {
    throw new Error(
      body.message ??
        `Paystack request failed with HTTP ${response.status}`,
    );
  }

  return body.data;
}

export async function initializePaystack(input: {
  email: string;
  amountMinor: number;
  reference: string;
  callbackUrl: string;
  metadata: Record<string, unknown>;
}): Promise<PaystackInitializeResponse> {
  if (
    !Number.isSafeInteger(input.amountMinor) ||
    input.amountMinor <= 0
  ) {
    throw new Error('Invalid Paystack transaction amount');
  }

  return paystackFetch<PaystackInitializeResponse>(
    '/transaction/initialize',
    {
      method: 'POST',
      body: JSON.stringify({
        email: input.email,
        amount: String(input.amountMinor),
        reference: input.reference,
        currency: 'NGN',
        callback_url: input.callbackUrl,
        metadata: JSON.stringify(input.metadata),
      }),
    },
  );
}

export type PaystackVerifyData = {
  id: number;
  status: string;
  reference: string;
  amount: number;
  currency: string;
  paid_at?: string;
  channel?: string;
  gateway_response?: string;
};

export async function verifyPaystack(
  reference: string,
): Promise<PaystackVerifyData> {
  return paystackFetch<PaystackVerifyData>(
    `/transaction/verify/${encodeURIComponent(reference)}`,
    {
      method: 'GET',
    },
  );
}