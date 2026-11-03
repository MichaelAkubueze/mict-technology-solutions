export type LeadStage =
  | 'LEAD'
  | 'QUALIFIED'
  | 'CHECKOUT_STARTED'
  | 'PAYMENT_SUCCESS'
  | 'ENROLMENT_CONFIRMED'
  | 'PAYMENT_FAILED'
  | 'ABANDONED'
  | 'REFUND_OR_DISPUTE'
  | 'ESCALATED';

export type MarketingAttribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  segment?: string;
  stage: LeadStage;
  attribution?: MarketingAttribution;
};

export type Checkout = {
  reference: string;
  leadId: string;
  amountMinor: number;
  currency: string;
  status: 'started' | 'success' | 'failed' | 'abandoned' | 'pending' | 'reversed';
};

export type Payment = {
  reference: string;
  transactionId: string;
  amountMinor: number;
  currency: string;
  status: string;
  paidAt?: string;
};
