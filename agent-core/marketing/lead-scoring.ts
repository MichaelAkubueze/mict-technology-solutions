export type LeadProfile = {
  source?: string;
  audience?: 'student' | 'graduate' | 'professional' | 'career-switcher' | 'entrepreneur' | 'technical' | 'other';
  intent?: 'curious' | 'interested' | 'qualified' | 'ready-to-pay';
  askedPrice?: boolean;
  askedStartDate?: boolean;
  askedPayment?: boolean;
  visitedCheckout?: boolean;
  checkoutStarted?: boolean;
};

export type LeadScore = {
  score: number;
  band: 'cold' | 'warm' | 'hot' | 'ready';
  reasons: string[];
};

export function scoreLead(profile: LeadProfile): LeadScore {
  let score = 0;
  const reasons: string[] = [];

  const intentPoints: Record<NonNullable<LeadProfile['intent']>, number> = {
    curious: 5,
    interested: 15,
    qualified: 30,
    'ready-to-pay': 45,
  };

  if (profile.intent) {
    score += intentPoints[profile.intent];
    reasons.push(`Intent: ${profile.intent}`);
  }
  if (profile.audience && profile.audience !== 'other') {
    score += 5;
    reasons.push(`Defined audience: ${profile.audience}`);
  }
  if (profile.askedPrice) {
    score += 10;
    reasons.push('Asked about price');
  }
  if (profile.askedStartDate) {
    score += 5;
    reasons.push('Asked about cohort start');
  }
  if (profile.askedPayment) {
    score += 10;
    reasons.push('Asked how to pay');
  }
  if (profile.visitedCheckout) {
    score += 10;
    reasons.push('Visited checkout');
  }
  if (profile.checkoutStarted) {
    score += 20;
    reasons.push('Started checkout');
  }

  score = Math.min(score, 100);
  const band = score >= 80 ? 'ready' : score >= 55 ? 'hot' : score >= 25 ? 'warm' : 'cold';
  return { score, band, reasons };
}
