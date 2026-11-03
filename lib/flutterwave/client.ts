type FlutterwaveInitializeInput = {
  email: string;
  fullName: string;
  phone?: string;
  amountNaira: number;
  reference: string;
  callbackUrl: string;
  metadata?: Record<string, string>;
};

type FlutterwaveInitializeResponse = {
  status: string;
  message?: string;
  data?: {
    link?: string;
  };
};

export async function initializeFlutterwave(
  input: FlutterwaveInitializeInput,
): Promise<{ link: string }> {
  const secretKey = process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secretKey) {
    throw new Error('Flutterwave secret key is not configured');
  }

  if (
    !Number.isSafeInteger(input.amountNaira) ||
    input.amountNaira <= 0
  ) {
    throw new Error('Invalid Flutterwave payment amount');
  }

  const response = await fetch('https://api.flutterwave.com/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      tx_ref: input.reference,
      amount: input.amountNaira,
      currency: 'NGN',
      redirect_url: input.callbackUrl,
      customer: {
        email: input.email,
        name: input.fullName,
        phonenumber: input.phone ?? '',
      },
      meta: input.metadata ?? {},
      customizations: {
        title: 'MICT Technology Solutions',
        description:
          'AI-Powered Data Analytics & Business Intelligence Bootcamp',
      },
    }),
    cache: 'no-store',
  });

  const result =
    (await response.json()) as FlutterwaveInitializeResponse;

  if (!response.ok || result.status !== 'success') {
    throw new Error('Flutterwave payment initialization failed');
  }

  const link = result.data?.link;

  if (
    typeof link !== 'string' ||
    !link.startsWith('https://checkout.flutterwave.com/')
  ) {
    throw new Error('Flutterwave returned an invalid checkout URL');
  }

  return { link };
}
