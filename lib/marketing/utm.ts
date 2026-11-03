export type MarketingAttribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

const keys = ['source', 'medium', 'campaign', 'content', 'term'] as const;

export function readAttribution(input: URLSearchParams): MarketingAttribution {
  const result: MarketingAttribution = {};
  for (const key of keys) {
    const value = input.get(`utm_${key}`) ?? input.get(key);
    if (value) result[key] = value.slice(0, 128);
  }
  return result;
}
