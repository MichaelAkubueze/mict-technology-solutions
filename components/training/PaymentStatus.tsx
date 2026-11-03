'use client';

import { useEffect, useState } from 'react';

export default function PaymentStatus() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const payment = new URLSearchParams(window.location.search).get('payment');
    if (payment) setStatus(payment);
  }, []);

  if (!status) return null;

  if (status === 'success') {
    return (
      <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-green-200 bg-green-50 p-5 text-sm leading-6 text-green-900">
        <strong>Payment verified successfully.</strong> Your founding-cohort payment has been recorded. Follow the onboarding instructions sent by MICT.
      </div>
    );
  }

  if (status === 'failed' || status === 'verification_failed') {
    return (
      <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
        <strong>Payment was not confirmed.</strong> Please try again or contact MICT on WhatsApp for assistance.
      </div>
    );
  }

  return null;
}
