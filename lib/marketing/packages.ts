export const trainingPackages = {
  founding: {
    id: 'founding',
    name: 'Founding Cohort',
    priceMinor: 1_500_000,
    priceLabel: '₦15,000',
    description: 'The eight-week core bootcamp with group learning.',
    recommended: false,
    features: [
      'Eight-week core bootcamp',
      'Group learning and training support',
    ],
  },

  professional: {
    id: 'professional',
    name: 'Professional',
    priceMinor: 2_500_000,
    priceLabel: '₦25,000',
    description: 'More structured practice, feedback and career preparation.',
    recommended: true,
    features: [
      'Everything in Founding Cohort',
      'Instructor-reviewed weekly assignments',
      'Guided workshops',
      'Capstone project review',
      'Career-readiness support',
    ],
  },

  premium: {
    id: 'premium',
    name: 'Premium Mentorship',
    priceMinor: 5_000_000,
    priceLabel: '₦50,000',
    description: 'Professional training with personalised mentorship.',
    recommended: false,
    features: [
      'Everything in Professional',
      'Two individual mentorship sessions',
      'Personalised learning plan',
      'Detailed capstone review',
      'Portfolio and career guidance',
      'Priority support',
      '30 days of post-bootcamp mentorship',
    ],
  },
} as const;

export type TrainingPackageId = keyof typeof trainingPackages;

export function getTrainingPackage(packageId: string) {
  if (!Object.prototype.hasOwnProperty.call(trainingPackages, packageId)) {
    return undefined;
  }

  return trainingPackages[packageId as TrainingPackageId];
}
