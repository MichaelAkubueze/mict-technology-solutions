# MICT Marketing Agent + Paystack integration

## Purpose

This package is a drop-in integration layer for the existing MICT Next.js App Router site.

It adds:

- Paystack server-side transaction initialization
- Paystack callback verification
- signed Paystack webhook handling
- MySQL persistence for leads, checkouts, payments and enrolments
- a client checkout component
- a server-side MICT marketing agent endpoint
- UTM/campaign attribution

Paystack's documented flow is to initialize a transaction on the server, redirect the user to the returned authorization URL, and verify the resulting payment. Paystack recommends webhooks over relying only on browser callbacks, and webhook signatures are HMAC-SHA512 over the raw payload.

## Files to copy

Copy the contents of `nextjs/` into the root of the existing Next.js project, preserving the `@/` import convention.

The provided files assume the existing project already has the `@/*` alias used by the current MICT site.

## Dependencies

Add:

```bash
pnpm add @openai/agents mysql2 zod
```

## Environment

Copy the relevant values from `.env.example` to the deployment environment.

Never commit:

- `OPENAI_API_KEY`
- `PAYSTACK_SECRET_KEY`
- database passwords
- webhook secrets

## Database

Create a dedicated MySQL database for marketing data and execute:

```text
database/001_mict_marketing.sql
```

Do not use Moodle's database for these marketing tables unless there is an explicit architecture decision to consolidate them.

## Course page integration

Import:

```tsx
import PaystackCheckout from '@/components/training/PaystackCheckout';
```

Render it inside the cohort registration area.

Example:

```tsx
<PaystackCheckout attribution={{
  source: 'website',
  medium: 'organic',
  campaign: 'october-cohort',
}} />
```

For paid social, pass the UTM values captured from the URL.

## Callback and webhook

Configure Paystack's webhook URL to:

`https://micttechnologysolutions.com/api/paystack/webhook`

Use the callback URL:

`https://micttechnologysolutions.com/api/paystack/callback`

The callback route verifies the transaction server-side. The webhook route verifies the `x-paystack-signature` header before processing the event.

## Enrolment

The current package confirms a paid enrolment in `mict_marketing_enrolments` after a verified successful Paystack payment.

It intentionally does NOT yet call Moodle's enrolment API. That is the next integration stage, after the production Moodle site is healthy and the correct Moodle authentication/API method is selected.

## Agent endpoint

POST `/api/marketing/agent`

Send the server-side admin header `x-mict-agent-key` matching `MARKETING_AGENT_ADMIN_KEY`. Do not expose that key to browser clients.

Request:

```json
{ "task": "Create three Facebook ad variants for working professionals." }
```

Response:

```json
{ "output": "..." }
```

This endpoint must remain server-side because it uses `OPENAI_API_KEY`.

## Security notes

- Treat Paystack webhook input as untrusted until signature verification succeeds.
- Keep the raw webhook body for signature verification before JSON parsing.
- Make payment writes idempotent by unique transaction/reference.
- Do not mark a learner paid from frontend query parameters alone.
- Do not expose Paystack secret keys to the browser.
- Add rate limiting and authentication to the marketing-agent endpoint before exposing it beyond administrators.
