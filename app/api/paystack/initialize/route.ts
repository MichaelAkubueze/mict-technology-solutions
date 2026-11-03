
import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { marketingConfig } from '@/lib/marketing/config';
import { readAttribution } from '@/lib/marketing/utm';
import {
  upsertLead,
  insertCheckout,
  upsertRegistration,
} from '@/lib/db/mysql';
import { initializePaystack } from '@/lib/paystack/client';

export const runtime = 'nodejs';

const schema = z.object({
  fullName: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(40),
  location: z.string().trim().min(2).max(120),
  occupation: z.string().trim().min(2).max(120),
  skillLevel: z.string().trim().min(2).max(64),
  motivation: z.string().trim().min(10).max(2000),
  contactMethod: z.enum(['WhatsApp', 'Email', 'Phone']),
  consentRegistration: z.literal(true),
  segment: z.string().trim().max(64).optional(),
  consentMarketing: z.boolean().optional(),
  attribution: z.record(z.string(), z.string()).optional(),
});

function createReference(): string {
  return `MICT-${Date.now()}-${crypto.randomUUID().replaceAll('-', '').slice(0, 16).toUpperCase()}`;
}

export async function POST(request: Request) {
  let body: z.infer<typeof schema>;

  try {
    body = schema.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: 'Please check your registration details and try again.' },
      { status: 400 },
    );
  }

  try {
    const attribution = readAttribution(
      new URLSearchParams(Object.entries(body.attribution ?? {})),
    );

    const leadId = await upsertLead({
      email: body.email,
      fullName: body.fullName,
      phone: body.phone,
      segment: body.segment ?? body.occupation,
      attribution,
      consentMarketing: body.consentMarketing,
    });

    await upsertRegistration({
      leadId,
      location: body.location,
      occupation: body.occupation,
      skillLevel: body.skillLevel,
      motivation: body.motivation,
      contactMethod: body.contactMethod,
      consentRegistration: body.consentRegistration,
    });

    const ref = createReference();
    const callbackUrl =
      process.env.PAYSTACK_CALLBACK_URL ??
      'https://micttechnologysolutions.com/api/paystack/callback';

    const tx = await initializePaystack({
      email: body.email,
      amountMinor: marketingConfig.priceMinor,
      reference: ref,
      callbackUrl,
      metadata: {
        course: marketingConfig.courseSlug,
        cohort: marketingConfig.cohortSlug,
        full_name: body.fullName,
        phone: body.phone,
        ...attribution,
      },
    });

    if (tx.reference !== ref) {
      throw new Error('Paystack returned an unexpected reference');
    }

    if (
      typeof tx.authorization_url !== 'string' ||
      !tx.authorization_url.startsWith('https://checkout.paystack.com/')
    ) {
      throw new Error('Paystack returned an invalid checkout URL');
    }

    await insertCheckout({
      leadId,
      reference: ref,
      amountMinor: marketingConfig.priceMinor,
      currency: marketingConfig.currency,
      authorizationUrl: tx.authorization_url,
      gateway: 'paystack',
      attribution,
    });

    return NextResponse.json({
      authorizationUrl: tx.authorization_url,
      reference: ref,
    });
  } catch {
    return NextResponse.json(
      { error: 'We could not start your payment. Please try again shortly.' },
      { status: 502 },
    );
  }
}
