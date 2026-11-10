-- MICT Technology Solutions
-- Migration 004: Package snapshots on payment checkouts
-- Existing checkout records remain valid with NULL package fields.
-- Execute only after reviewing and backing up the production database.

ALTER TABLE mict_marketing_checkouts
    ADD COLUMN package_id VARCHAR(40) NULL
    AFTER gateway,
    ADD COLUMN package_name VARCHAR(100) NULL
    AFTER package_id;

-- amount_minor remains the authoritative checkout price snapshot.
-- New application checkouts must supply a valid package ID and name.
