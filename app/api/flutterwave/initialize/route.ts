
import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { marketingConfig } from '@/lib/marketing/config';
import { getTrainingPackage } from '@/lib/marketing/packages';
import { readAttribution } from '@/lib/marketing/utm';
import {
  upsertLead,
  insertCheckout,
  upsertRegistration,
} from '@/lib/db/mysql';
import { initializeFlutterwave } from '@/lib/flutterwave/client';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const schema = z.object({
  fullName: z.string().trim().min(2).max(160),
  packageId: z.enum(['founding', 'professional', 'premium']),
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
  return `MICT-FLW-${Date.now()}-${crypto.randomUUID()
    .replaceAll('-', '')
    .slice(0, 16)
    .toUpperCase()}`;
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
    const selectedPackage = getTrainingPackage(body.packageId);

    if (!selectedPackage) {
      return NextResponse.json(
        { error: 'Please select a valid training package.' },
        { status: 400 },
      );
    }

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

    const reference = createReference();
    const callbackUrl =
      process.env.FLUTTERWAVE_CALLBACK_URL ??
      'https://micttechnologysolutions.com/api/flutterwave/callback';

    const amountNaira = selectedPackage.priceMinor / 100;

    if (!Number.isSafeInteger(amountNaira) || amountNaira <= 0) {
      throw new Error('Invalid configured course price');
    }

    const tx = await initializeFlutterwave({
      email: body.email,
      fullName: body.fullName,
      phone: body.phone,
      amountNaira,
      reference,
      callbackUrl,
      metadata: {
        course: marketingConfig.courseSlug,
        cohort: marketingConfig.cohortSlug,
        package_id: selectedPackage.id,
        package_name: selectedPackage.name,
        full_name: body.fullName,
        phone: body.phone,
        ...attribution,
      },
    });

    await insertCheckout({
      leadId,
      reference,
      amountMinor: selectedPackage.priceMinor,
      currency: marketingConfig.currency,
      packageId: selectedPackage.id,
      packageName: selectedPackage.name,
      authorizationUrl: tx.link,
      gateway: 'flutterwave',
      attribution,
    });

    return NextResponse.json({
      authorizationUrl: tx.link,
      reference,
    });
  } catch (error) {
    console.error('Flutterwave initialization failed:', error);

    return NextResponse.json(
      {
        error: 'We could not start your payment. Please try again shortly.',
      },
      { status: 502 },
    );
  }
}
