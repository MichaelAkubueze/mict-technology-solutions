-- MICT Technology Solutions
-- Migration 003: Course registration details
-- Creates a separate registration record linked to each marketing lead.

CREATE TABLE IF NOT EXISTS mict_marketing_registrations (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id BIGINT UNSIGNED NOT NULL,
  course_slug VARCHAR(100) NOT NULL,
  cohort_slug VARCHAR(100) NOT NULL,
  location VARCHAR(160) NOT NULL,
  occupation VARCHAR(160) NOT NULL,
  skill_level VARCHAR(32) NOT NULL,
  motivation TEXT NOT NULL,
  contact_method VARCHAR(20) NOT NULL,
  consent_registration TINYINT(1) NOT NULL DEFAULT 0,
  status VARCHAR(32) NOT NULL DEFAULT 'pending_payment',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_mict_registration_lead_cohort (lead_id, course_slug, cohort_slug),
  KEY idx_mict_registration_status (status),
  CONSTRAINT fk_mict_registration_lead
    FOREIGN KEY (lead_id) REFERENCES mict_marketing_leads(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
