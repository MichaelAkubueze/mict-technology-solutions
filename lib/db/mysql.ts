
import mysql from 'mysql2/promise';

let pool: any;

export type PaymentGateway = 'paystack' | 'flutterwave';

function getPool(): any {
  if (pool) return pool;

  const required = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'] as const;

  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`${key} is not configured`);
    }
  }

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 3306),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 5,
    charset: 'utf8mb4',
    enableKeepAlive: true,
  });

  return pool;
}

export type LeadInput = {
  email: string;
  fullName: string;
  phone?: string;
  segment?: string;
  score?: number;
  scoreBand?: string;
  attribution?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
  consentMarketing?: boolean;
};

export async function upsertLead(input: LeadInput): Promise<number> {
  const db = getPool();
  const a = input.attribution ?? {};

  const [result] = await db.execute(
    `INSERT INTO mict_marketing_leads
      (email, full_name, phone, segment, score, score_band, source, medium,
       campaign, content, term, consent_marketing)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       full_name = VALUES(full_name),
       phone = VALUES(phone),
       segment = VALUES(segment),
       score = VALUES(score),
       score_band = VALUES(score_band),
       source = VALUES(source),
       medium = VALUES(medium),
       campaign = VALUES(campaign),
       content = VALUES(content),
       term = VALUES(term),
       consent_marketing = GREATEST(consent_marketing, VALUES(consent_marketing))`,
    [
      input.email,
      input.fullName,
      input.phone ?? null,
      input.segment ?? null,
      input.score ?? 0,
      input.scoreBand ?? 'cold',
      a.source ?? null,
      a.medium ?? null,
      a.campaign ?? null,
      a.content ?? null,
      a.term ?? null,
      input.consentMarketing ? 1 : 0,
    ],
  );

  if (result.insertId) return Number(result.insertId);

  const [rows] = await db.execute(
    'SELECT id FROM mict_marketing_leads WHERE email = ? LIMIT 1',
    [input.email],
  );

  if (!rows[0]?.id) {
    throw new Error('Lead could not be resolved after upsert');
  }

  return Number(rows[0].id);
}

export async function insertCheckout(input: {
  leadId: number;
  reference: string;
  amountMinor: number;
  currency: string;
  packageId: string;
  packageName: string;
  authorizationUrl: string;
  gateway?: PaymentGateway;
  attribution?: LeadInput['attribution'];
}): Promise<number> {
  const db = getPool();
  const a = input.attribution ?? {};
  const gateway = input.gateway ?? 'paystack';

  if (!['paystack', 'flutterwave'].includes(gateway)) {
    throw new Error('Unsupported payment gateway');
  }

  const [result] = await db.execute(
    `INSERT INTO mict_marketing_checkouts
      (lead_id, reference, gateway, package_id, package_name,
       amount_minor, currency, status, authorization_url,
       source, medium, campaign, content, term)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'initialized', ?, ?, ?, ?, ?, ?)`,
    [
      input.leadId,
      input.reference,
      gateway,
      input.packageId,
      input.packageName,
      input.amountMinor,
      input.currency,
      input.authorizationUrl,
      a.source ?? null,
      a.medium ?? null,
      a.campaign ?? null,
      a.content ?? null,
      a.term ?? null,
    ],
  );

  return Number(result.insertId);
}

export async function recordVerifiedPayment(input: {
  gateway?: PaymentGateway;
  reference: string;
  transactionId: string | number;
  amountMinor: number;
  currency: string;
  paidAt?: string;
  channel?: string;
  gatewayResponse?: string;
  rawEventJson: string;
  status: string;
}): Promise<number> {
  const db = getPool();
  const conn = await db.getConnection();

  try {
    await conn.beginTransaction();

    const gateway = input.gateway ?? 'paystack';

    if (!['paystack', 'flutterwave'].includes(gateway)) {
      throw new Error('Unsupported payment gateway');
    }

    const transactionId = String(input.transactionId).trim();

    if (!transactionId || transactionId.length > 100) {
      throw new Error('Invalid payment transaction ID');
    }

    // Paystack transaction IDs are numeric and stored in its legacy column.
    if (gateway === 'paystack') {
      const numericId = Number(transactionId);

      if (!Number.isSafeInteger(numericId) || numericId <= 0) {
        throw new Error('Invalid Paystack transaction ID');
      }
    }

    if (
      !Number.isSafeInteger(input.amountMinor) ||
      input.amountMinor <= 0
    ) {
      throw new Error('Invalid payment amount');
    }

    if (
      !['success', 'failed', 'abandoned', 'ongoing', 'pending'].includes(
        input.status,
      )
    ) {
      throw new Error('Unrecognized payment status');
    }

    const [checkoutRows] = await conn.execute(
      `SELECT id, lead_id, amount_minor, currency, gateway
       FROM mict_marketing_checkouts
       WHERE reference = ?
       LIMIT 1
       FOR UPDATE`,
      [input.reference],
    );

    const checkout = checkoutRows[0];

    if (!checkout) {
      throw new Error(
        'Payment reference does not match an existing checkout',
      );
    }

    if (checkout.gateway !== gateway) {
      throw new Error(
        'Payment gateway does not match the original checkout',
      );
    }

    if (
      input.amountMinor !== Number(checkout.amount_minor) ||
      input.currency !== String(checkout.currency)
    ) {
      throw new Error(
        'Payment amount or currency does not match the checkout',
      );
    }

    const checkoutId = Number(checkout.id);
    const leadId = Number(checkout.lead_id);

    const [existingRows] = await conn.execute(
      `SELECT
         id,
         status,
         gateway,
         gateway_transaction_id,
         paystack_transaction_id
       FROM mict_marketing_payments
       WHERE reference = ?
       LIMIT 1
       FOR UPDATE`,
      [input.reference],
    );

    const existing = existingRows[0];

    if (existing && existing.gateway !== gateway) {
      throw new Error(
        'Payment gateway conflicts with the existing payment',
      );
    }

    // Support legacy Paystack records that predate the generic ID column.
    const existingTransactionId =
      existing?.gateway_transaction_id ??
      (existing?.paystack_transaction_id != null
        ? String(existing.paystack_transaction_id)
        : null);

    if (
      existingTransactionId !== null &&
      String(existingTransactionId) !== transactionId
    ) {
      throw new Error(
        'Transaction ID does not match the existing payment',
      );
    }

    // Never allow a later unsuccessful notification to downgrade success.
    const effectiveStatus =
      existing?.status === 'success' ? 'success' : input.status;

    const paystackTransactionId =
      gateway === 'paystack' ? Number(transactionId) : null;

    await conn.execute(
      `INSERT INTO mict_marketing_payments
        (checkout_id, lead_id, gateway, gateway_transaction_id,
         paystack_transaction_id, reference, status, amount_minor,
         currency, paid_at, channel, gateway_response, raw_event_json)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         status = VALUES(status),
         paid_at = COALESCE(VALUES(paid_at), paid_at),
         channel = COALESCE(VALUES(channel), channel),
         gateway_response = VALUES(gateway_response),
         raw_event_json = VALUES(raw_event_json)`,
      [
        checkoutId,
        leadId,
        gateway,
        transactionId,
        paystackTransactionId,
        input.reference,
        effectiveStatus,
        input.amountMinor,
        input.currency,
        input.paidAt ? new Date(input.paidAt) : null,
        input.channel ?? null,
        input.gatewayResponse ?? null,
        input.rawEventJson,
      ],
    );

    await conn.execute(
      `UPDATE mict_marketing_checkouts
       SET status = ?
       WHERE id = ?`,
      [effectiveStatus, checkoutId],
    );

    const [paymentRows] = await conn.execute(
      `SELECT id, lead_id
       FROM mict_marketing_payments
       WHERE reference = ?
       LIMIT 1`,
      [input.reference],
    );

    const payment = paymentRows[0];

    if (
      effectiveStatus === 'success' &&
      payment?.id &&
      payment?.lead_id
    ) {
      const courseSlug =
        process.env.COHORT_COURSE_SLUG ?? 'data-analytics';

      const cohortSlug =
        process.env.COHORT_SLUG ?? 'data-analytics-founding-cohort';

      // Confirm enrolment without replacing its original payment ID.
      await conn.execute(
        `INSERT INTO mict_marketing_enrolments
          (lead_id, payment_id, course_slug, cohort_slug, status)
         VALUES (?, ?, ?, ?, 'confirmed')
         ON DUPLICATE KEY UPDATE
           status = 'confirmed'`,
        [
          Number(payment.lead_id),
          Number(payment.id),
          courseSlug,
          cohortSlug,
        ],
      );

      // Confirm the corresponding registration.
      const [registrationResult] = await conn.execute(
        `UPDATE mict_marketing_registrations
         SET status = 'confirmed',
             updated_at = CURRENT_TIMESTAMP
         WHERE lead_id = ?
           AND course_slug = ?
           AND cohort_slug = ?`,
        [
          Number(payment.lead_id),
          courseSlug,
          cohortSlug,
        ],
      );

      // An already-confirmed registration may report zero changed rows.
      if (registrationResult.affectedRows === 0) {
        const [registrationRows] = await conn.execute(
          `SELECT id
           FROM mict_marketing_registrations
           WHERE lead_id = ?
             AND course_slug = ?
             AND cohort_slug = ?
           LIMIT 1`,
          [
            Number(payment.lead_id),
            courseSlug,
            cohortSlug,
          ],
        );

        if (!registrationRows[0]?.id) {
          throw new Error(
            'Payment was verified, but the corresponding registration was not found',
          );
        }
      }
    }

    if (effectiveStatus === 'success' && payment?.id && payment?.lead_id) {
      const moodleCourseId = Number(process.env.MOODLE_COURSE_ID);

      if (!Number.isSafeInteger(moodleCourseId) || moodleCourseId <= 0) {
        throw new Error('Invalid Moodle course ID configuration');
      }

      await conn.execute(
        `INSERT INTO mict_moodle_provisioning_jobs
          (payment_id, lead_id, course_id, status)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID(id)`,
        [Number(payment.id), Number(payment.lead_id), moodleCourseId, 'pending'],
      );
    }

    await conn.commit();

    return Number(payment?.id ?? 0);
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

export type RegistrationInput = {
  leadId: number;
  location: string;
  occupation: string;
  skillLevel: string;
  motivation: string;
  contactMethod: 'WhatsApp' | 'Email' | 'Phone';
  consentRegistration: boolean;
};

export async function upsertRegistration(
  input: RegistrationInput,
): Promise<number> {
  const db = getPool();

  if (!Number.isSafeInteger(input.leadId) || input.leadId <= 0) {
    throw new Error('Invalid registration lead ID');
  }

  if (!input.consentRegistration) {
    throw new Error('Registration consent is required');
  }

  const courseSlug =
    process.env.COHORT_COURSE_SLUG ?? 'data-analytics';

  const cohortSlug =
    process.env.COHORT_SLUG ?? 'data-analytics-founding-cohort';

  const [result] = await db.execute(
    `INSERT INTO mict_marketing_registrations
      (lead_id, course_slug, cohort_slug, location, occupation,
       skill_level, motivation, contact_method, consent_registration,
       status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 'pending_payment')
     ON DUPLICATE KEY UPDATE
       location = VALUES(location),
       occupation = VALUES(occupation),
       skill_level = VALUES(skill_level),
       motivation = VALUES(motivation),
       contact_method = VALUES(contact_method),
       consent_registration = 1,
       status = IF(status = 'confirmed', 'confirmed', 'pending_payment')`,
    [
      input.leadId,
      courseSlug,
      cohortSlug,
      input.location,
      input.occupation,
      input.skillLevel,
      input.motivation,
      input.contactMethod,
    ],
  );

  if (result.insertId) {
    return Number(result.insertId);
  }

  const [rows] = await db.execute(
    `SELECT id
     FROM mict_marketing_registrations
     WHERE lead_id = ?
       AND course_slug = ?
       AND cohort_slug = ?
     LIMIT 1`,
    [input.leadId, courseSlug, cohortSlug],
  );

  if (!rows[0]?.id) {
    throw new Error(
      'Registration could not be resolved after saving',
    );
  }

  return Number(rows[0].id);
}
