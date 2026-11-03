import crypto from 'node:crypto';

export function verifyPaystackSignature(rawBody: string, signature: string): boolean {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) throw new Error('PAYSTACK_SECRET_KEY is not configured');

  const expected = crypto.createHmac('sha512', secret).update(rawBody).digest('hex');

  const supplied = Buffer.from(signature, 'utf8');
  const calculated = Buffer.from(expected, 'utf8');

  if (supplied.length !== calculated.length) return false;
  return crypto.timingSafeEqual(supplied, calculated);
}
