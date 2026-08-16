export type TrackEvent =
  | 'content_view'
  | 'protocol_view'
  | 'cta_click'
  | 'checkout_started'
  | 'checkout_returned'
  | 'purchase_completed'
  | 'protocol_opened'
  | 'protocol_completed'
  | 'related_protocol_clicked'
  | 'repurchase';

export type TrackPayload = {
  event: TrackEvent;
  ts?: string;
  market?: string;
  edition?: string;
  protocol_id?: string;
  route_id?: string;
  content_id?: string;
  source?: string;
  campaign?: string;
  medium?: string;
  term?: string;
  content?: string;
  price?: number;
  currency?: string;
  path?: string;
  referrer?: string;
};

import { captureUtmFromUrl } from './attribution';

function getEndpoint(): string {
  return (import.meta.env.PUBLIC_TRACK_ENDPOINT || '').trim();
}

function ensureSessionId(): string {
  const key = 'synora_session_id';
  const existing = globalThis.localStorage?.getItem(key);
  if (existing) return existing;
  const value = globalThis.crypto?.randomUUID?.() || String(Date.now());
  globalThis.localStorage?.setItem(key, value);
  return value;
}

export function track(payload: TrackPayload): void {
  const endpoint = getEndpoint();
  const attribution = (() => {
    try {
      return JSON.parse(globalThis.localStorage?.getItem('synora_attribution_v1') || '{}');
    } catch {
      return {};
    }
  })();

  const body = {
    ...payload,
    ts: payload.ts || new Date().toISOString(),
    path: payload.path || globalThis.location?.pathname,
    referrer: payload.referrer || globalThis.document?.referrer || '',
    source: payload.source || attribution.source,
    campaign: payload.campaign || attribution.campaign,
    medium: payload.medium || attribution.medium,
    term: payload.term || attribution.term,
    content: payload.content || attribution.content,
    route_id: payload.route_id || attribution.route_id,
    protocol_id: payload.protocol_id || attribution.protocol_id,
    edition: payload.edition || attribution.edition,
    session_id: ensureSessionId(),
  };

  if (!endpoint) {
    // fallback: keep local evidence
    try {
      const k = 'synora_events';
      const arr = JSON.parse(globalThis.localStorage?.getItem(k) || '[]');
      arr.push(body);
      globalThis.localStorage?.setItem(k, JSON.stringify(arr.slice(-200)));
    } catch {
      // ignore
    }
    // eslint-disable-next-line no-console
    console.info('[synora.track]', body);
    return;
  }

  try {
    const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
    const ok = globalThis.navigator?.sendBeacon?.(endpoint, blob);
    if (ok) return;
  } catch {
    // fallthrough
  }

  fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => {});
}

declare global {
  interface Window {
    synoraTrack?: (payload: TrackPayload) => void;
  }
}

export function installTrackOnWindow(): void {
  if (typeof window === 'undefined') return;
  try {
    captureUtmFromUrl();
  } catch {
    // ignore
  }
  window.synoraTrack = track;
}
