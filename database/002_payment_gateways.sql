-- MICT Technology Solutions
-- Migration 002: Paystack and Flutterwave support
-- Target database: psdyfzib_mict_marketing
-- Execute only after reviewing and backing up the production database.

-- Add gateway identification to existing checkout records.
-- Existing records default to Paystack.
ALTER TABLE mict_marketing_checkouts
    ADD COLUMN gateway VARCHAR(20) NOT NULL DEFAULT 'paystack'
    AFTER reference;

-- Add gateway identification and a provider-neutral transaction ID.
ALTER TABLE mict_marketing_payments
    ADD COLUMN gateway VARCHAR(20) NOT NULL DEFAULT 'paystack'
    AFTER reference,
    ADD COLUMN gateway_transaction_id VARCHAR(100) NULL
    AFTER paystack_transaction_id;

-- Preserve and copy historical Paystack transaction IDs.
UPDATE mict_marketing_payments
SET gateway_transaction_id = CAST(paystack_transaction_id AS CHAR)
WHERE paystack_transaction_id IS NOT NULL;

-- Existing unique references, primary keys and relationships remain unchanged.
