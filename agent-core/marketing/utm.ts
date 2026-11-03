export type CampaignAttribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

export function parseUtm(input: URL | string): CampaignAttribution {
  const url = typeof input === 'string' ? new URL(input) : input;
  const get = (key: string) => url.searchParams.get(key) ?? undefined;
  return {
    source: get('utm_source'),
    medium: get('utm_medium'),
    campaign: get('utm_campaign'),
    content: get('utm_content'),
    term: get('utm_term'),
  };
}
