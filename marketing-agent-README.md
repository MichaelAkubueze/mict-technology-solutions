# MICT Marketing AI Agent – Website Integration

This version integrates the marketing agent and Paystack conversion layer into the MICT Next.js website.

## Live funnel

Landing page → lead capture → Paystack transaction initialization → Paystack checkout → server-side verification → payment record → confirmed marketing enrolment state.

## Current cohort

- Course: AI-Powered Data Analytics & Business Intelligence Bootcamp
- Founding cohort fee: ₦15,000
- Registration close: 14 October 2026, 23:59 Africa/Lagos
- Training start: 16 October 2026
- Payment: Paystack
- Assisted support: WhatsApp

## Required environment variables

See `.env.example`. Never commit secrets.

## Database

Execute `database/001_mict_marketing.sql` in a dedicated MySQL database. Do not reuse Moodle's database unless an explicit architecture decision is made.

## Paystack

The integration initializes transactions from the server, redirects the learner to Paystack, verifies the reference server-side on callback, and validates Paystack webhooks using `x-paystack-signature`.

## Marketing attribution

UTM parameters are captured in the browser and persisted locally so they can travel into checkout metadata and marketing records.

## Agent endpoint

`POST /api/marketing/agent` with header `x-mict-agent-key` equal to `MARKETING_AGENT_ADMIN_KEY`.

Keep this endpoint server-side. Add stronger admin authentication before exposing it beyond trusted operators.

## Moodle

Confirmed payment currently creates a marketing enrolment record. Automatic Moodle enrolment is deliberately not enabled until the production Moodle endpoint/authentication method is tested and approved.
