'use client';

import { useEffect, useMemo, useState } from 'react';
import { cohortCampaign } from '@/lib/cohortCampaign';

const ATTRIBUTION_STORAGE_KEY = 'mict-marketing-attribution';

type PaymentGateway = 'paystack' | 'flutterwave';

function readStoredAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function readUrlAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const keys = ['source', 'medium', 'campaign', 'content', 'term'] as const;
  const result: Record<string, string> = {};

  for (const key of keys) {
    const value = params.get(`utm_${key}`) ?? params.get(key);
    if (value) result[key] = value.slice(0, 128);
  }

  return result;
}

export default function PaystackCheckout() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [segment, setSegment] = useState('');
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [gateway, setGateway] = useState<PaymentGateway>('paystack');
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const merged = {
      ...readStoredAttribution(),
      ...readUrlAttribution(),
    };

    setAttribution(merged);

    if (Object.keys(merged).length) {
      try {
        window.localStorage.setItem(
          ATTRIBUTION_STORAGE_KEY,
          JSON.stringify(merged),
        );
      } catch {
        // Attribution can still be submitted with this checkout.
      }
    }
  }, []);

  const attributionSummary = useMemo(() => {
    const source = attribution.source;
    const campaign = attribution.campaign;

    if (!source && !campaign) return null;

    return [source, campaign].filter(Boolean).join(' / ');
  }, [attribution]);

  async function startPayment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint =
        gateway === 'paystack'
          ? '/api/paystack/initialize'
          : '/api/flutterwave/initialize';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          segment,
          consentMarketing,
          attribution,
        }),
      });

      const body = (await response.json()) as {
        authorizationUrl?: string;
        error?: string;
      };

      if (!response.ok || !body.authorizationUrl) {
        throw new Error(body.error ?? 'Unable to start payment. Please try again.');
      }

      window.location.assign(body.authorizationUrl);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to start payment. Please try again.',
      );
      setLoading(false);
    }
  }

  const whatsappNumber = `234${cohortCampaign.whatsappNumber.slice(1)}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    cohortCampaign.whatsappMessage,
  )}`;

  return (
    <div
      id="registration-checkout"
      className="mx-auto mt-10 max-w-2xl rounded-3xl border border-green-200 bg-white p-6 shadow-xl sm:p-8"
    >
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
          Secure Your Seat
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Complete your founding-cohort registration
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          The founding-cohort registration fee is{' '}
          <strong>NGN 15,000</strong>. Choose your preferred secure payment
          provider below.
        </p>
      </div>

      <form onSubmit={startPayment}>
        <div className="mt-6">
          <p className="mb-3 text-sm font-bold text-slate-800">
            Choose your payment method
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                gateway === 'paystack'
                  ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-100'
                  : 'border-slate-200 bg-white hover:border-blue-300'
              }`}
            >
              <input
                type="radio"
                name="paymentGateway"
                value="paystack"
                checked={gateway === 'paystack'}
                onChange={() => setGateway('paystack')}
                className="h-4 w-4 accent-blue-700"
              />
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  Paystack
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  Secure online payment
                </span>
              </span>
            </label>

            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                gateway === 'flutterwave'
                  ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-100'
                  : 'border-slate-200 bg-white hover:border-orange-300'
              }`}
            >
              <input
                type="radio"
                name="paymentGateway"
                value="flutterwave"
                checked={gateway === 'flutterwave'}
                onChange={() => setGateway('flutterwave')}
                className="h-4 w-4 accent-orange-600"
              />
              <span>
                <span className="block text-sm font-bold text-slate-900">
                  Flutterwave
                </span>
                <span className="mt-1 block text-xs text-slate-500">
                  Secure online payment
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            required
            minLength={2}
            maxLength={160}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Full name"
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <input
            required
            type="email"
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Phone / WhatsApp number"
            autoComplete="tel"
            maxLength={40}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />

          <select
            value={segment}
            onChange={(event) => setSegment(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Who best describes you?</option>
            <option value="student">Student / recent graduate</option>
            <option value="professional">Working professional</option>
            <option value="career-switcher">Career switcher</option>
            <option value="entrepreneur">Entrepreneur / business owner</option>
            <option value="it-professional">IT / technical professional</option>
          </select>
        </div>

        <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            type="checkbox"
            checked={consentMarketing}
            onChange={(event) => setConsentMarketing(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span>
            I agree that MICT may send me relevant training and cohort updates.
          </span>
        </label>

        {attributionSummary ? (
          <p className="mt-3 text-xs text-slate-400">
            Campaign attribution captured: {attributionSummary}
          </p>
        ) : null}

        {error ? (
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading || !fullName.trim() || !email.trim()}
          className="mt-6 w-full rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-black text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? 'Opening secure checkout...'
            : `Continue with ${gateway === 'paystack' ? 'Paystack' : 'Flutterwave'} - NGN 15,000`}
        </button>
      </form>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-center">
        <p className="text-sm text-slate-600">
          Prefer to speak with our team before registering?
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center font-bold text-green-700 hover:text-green-800"
        >
          Contact MICT on WhatsApp
        </a>
      </div>

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        Your payment will be processed securely by the payment provider you select.
      </p>
    </div>
  );
}
