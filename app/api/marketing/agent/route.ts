import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { Agent, run } from '@openai/agents';
import { z } from 'zod';
import { marketingConfig, nairaFromMinor } from '@/lib/marketing/config';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const requestSchema = z.object({
  task: z.string().trim().min(3).max(4000),
});

const agent = new Agent({
  name: 'MICT Cohort Marketing Agent',
  instructions: `You are MICT Technology Solutions' cohort growth agent.

Primary goal: increase confirmed paid enrolments for the current AI-Powered Data Analytics & Business Intelligence Bootcamp.

Current offer: ${marketingConfig.courseName}
Current registration fee: ₦${nairaFromMinor(marketingConfig.priceMinor).toLocaleString('en-NG')}
Currency: ${marketingConfig.currency}
Payment gateways: Paystack and Flutterwave
Assisted support channel: WhatsApp

Never invent a payment checkout URL, payment status, learner result, testimonial, certification claim, discount, or campaign metric. Optimize for the funnel: attention → trust → lead → checkout → verified payment → confirmed enrolment.

When generating campaign copy, use practical Nigerian-market language, clear benefits, credible claims, and one primary CTA. Distinguish observed data from assumptions.`,
  model: process.env.OPENAI_MODEL ?? 'gpt-5.4',
});

function isAuthorized(request: Request): boolean {
  const adminKey = process.env.MARKETING_AGENT_ADMIN_KEY;
  const suppliedKey = request.headers.get('x-mict-agent-key');

  if (!adminKey || !suppliedKey) {
    return false;
  }

  const expected = Buffer.from(adminKey, 'utf8');
  const supplied = Buffer.from(suppliedKey, 'utf8');

  if (expected.length !== supplied.length) {
    return false;
  }

  return crypto.timingSafeEqual(expected, supplied);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 },
    );
  }

  let task: string;

  try {
    const body = requestSchema.parse(await request.json());
    task = body.task;
  } catch {
    return NextResponse.json(
      { error: 'Please provide a valid marketing task.' },
      { status: 400 },
    );
  }

  try {
    const result = await run(agent, task);

    return NextResponse.json({
      output: result.finalOutput,
    });
  } catch (error) {
    console.error('MICT marketing agent request failed:', error);

    return NextResponse.json(
      { error: 'The marketing agent could not complete this request.' },
      { status: 500 },
    );
  }
}