import { installTrackOnWindow, track } from '../lib/track';

installTrackOnWindow();

const els = Array.from(document.querySelectorAll('script[data-synora-track="payload"]'));
for (const el of els) {
  if (el.getAttribute('data-synora-track-processed') === '1') continue;
  el.setAttribute('data-synora-track-processed', '1');
  try {
    const raw = el.textContent || '';
    const payload = raw ? JSON.parse(raw) : null;
    if (payload) track(payload);
  } catch {
    // ignore
  }
}

