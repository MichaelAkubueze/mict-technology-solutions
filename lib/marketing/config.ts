export const marketingConfig = {
  courseSlug: process.env.COHORT_COURSE_SLUG ?? 'data-analytics',
  cohortSlug: process.env.COHORT_SLUG ?? 'data-analytics-founding-cohort',
  priceMinor: Number(process.env.COHORT_PRICE_MINOR ?? 1_500_000),
  currency: process.env.COHORT_CURRENCY ?? 'NGN',
  courseName: 'AI-Powered Data Analytics & Business Intelligence Bootcamp',
} as const;

export function nairaFromMinor(amountMinor: number): number {
  return amountMinor / 100;
}
