import { Agent, run, tool } from '@openai/agents';
import { z } from 'zod';
import cohort from '../../data/cohort.json' with { type: 'json' };
import { MICT_MARKETING_AGENT_INSTRUCTIONS } from './instructions';

const getCurrentCohort = tool({
  name: 'get_current_cohort',
  description: 'Return the approved current MICT cohort configuration. Use this before making claims about price, dates, payment gateway, or the payment URL.',
  parameters: z.object({}),
  async execute() {
    return JSON.stringify({
      ...cohort,
      payment_url_configured: Boolean(cohort.paystack_checkout_url),
      paystack_secret_configured: Boolean(process.env.PAYSTACK_SECRET_KEY),
    });
  },
});

const getPaymentReadiness = tool({
  name: 'get_payment_readiness',
  description: 'Check whether the Paystack integration has the minimum configuration needed for a live checkout. Never return or expose secrets.',
  parameters: z.object({}),
  async execute() {
    return JSON.stringify({
      gateway: cohort.payment_gateway,
      checkout_url_configured: Boolean(cohort.paystack_checkout_url),
      secret_key_configured: Boolean(process.env.PAYSTACK_SECRET_KEY),
      public_key_configured: Boolean(process.env.PAYSTACK_PUBLIC_KEY),
      callback_url_configured: Boolean(process.env.PAYSTACK_CALLBACK_URL),
      webhook_secret_available: Boolean(process.env.PAYSTACK_SECRET_KEY),
      ready_for_live_payment: Boolean(
        cohort.paystack_checkout_url &&
        process.env.PAYSTACK_SECRET_KEY &&
        process.env.PAYSTACK_CALLBACK_URL,
      ),
    });
  },
});

export const mictMarketingAgent = new Agent({
  name: 'MICT Cohort Marketing Agent',
  instructions: MICT_MARKETING_AGENT_INSTRUCTIONS,
  model: process.env.OPENAI_MODEL ?? 'gpt-5.4',
  tools: [getCurrentCohort, getPaymentReadiness],
});

export async function runMarketingAgent(task: string): Promise<string> {
  const result = await run(mictMarketingAgent, task);
  return result.finalOutput ?? '';
}
