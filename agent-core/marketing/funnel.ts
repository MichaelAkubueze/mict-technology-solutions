export type FunnelSnapshot = {
  reach: number;
  engagements: number;
  landingPageVisits: number;
  leads: number;
  qualifiedLeads: number;
  checkoutStarted: number;
  successfulPayments: number;
  confirmedEnrolments: number;
  adSpendNgn?: number;
  revenueNgn?: number;
};

export function deriveFunnelMetrics(snapshot: FunnelSnapshot) {
  const rate = (num: number, den: number) => den > 0 ? num / den : null;
  return {
    engagementRate: rate(snapshot.engagements, snapshot.reach),
    visitToLeadRate: rate(snapshot.leads, snapshot.landingPageVisits),
    leadToQualifiedRate: rate(snapshot.qualifiedLeads, snapshot.leads),
    leadToCheckoutRate: rate(snapshot.checkoutStarted, snapshot.leads),
    checkoutToPaymentRate: rate(snapshot.successfulPayments, snapshot.checkoutStarted),
    paymentToEnrolmentRate: rate(snapshot.confirmedEnrolments, snapshot.successfulPayments),
    costPerLeadNgn: snapshot.adSpendNgn && snapshot.leads ? snapshot.adSpendNgn / snapshot.leads : null,
    costPerEnrolmentNgn: snapshot.adSpendNgn && snapshot.confirmedEnrolments ? snapshot.adSpendNgn / snapshot.confirmedEnrolments : null,
    revenueNgn: snapshot.revenueNgn ?? snapshot.successfulPayments * 15000,
  };
}
