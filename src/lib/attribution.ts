export type Attribution = {
  route_id?: string;
  protocol_id?: string;
  edition?: string;
  source?: string;
  campaign?: string;
  medium?: string;
  content?: string;
  term?: string;
};

const KEY = 'synora_attribution_v1';

function safeJsonParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  return safeJsonParse<Attribution>(window.localStorage.getItem(KEY)) || {};
}

export function setAttribution(partial: Attribution): Attribution {
  if (typeof window === 'undefined') return partial;
  const current = getAttribution();
  const merged: Attribution = { ...current, ...partial };
  window.localStorage.setItem(KEY, JSON.stringify(merged));
  return merged;
}

export function captureUtmFromUrl(): Attribution {
  if (typeof window === 'undefined') return {};
  const url = new URL(window.location.href);
  const params = url.searchParams;

  const source = params.get('utm_source') || params.get('source') || undefined;
  const campaign = params.get('utm_campaign') || params.get('campaign') || undefined;
  const medium = params.get('utm_medium') || undefined;
  const content = params.get('utm_content') || undefined;
  const term = params.get('utm_term') || undefined;
  const route_id = params.get('route_id') || params.get('rid') || undefined;
  const protocol_id = params.get('protocol_id') || params.get('pid') || undefined;
  const edition = params.get('edition') || undefined;

  const captured: Attribution = { source, campaign, medium, content, term, route_id, protocol_id, edition };
  return setAttribution(
    Object.fromEntries(Object.entries(captured).filter(([, v]) => v != null && v !== '')) as Attribution,
  );
}

