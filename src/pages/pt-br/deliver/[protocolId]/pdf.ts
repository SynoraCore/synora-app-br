import { readFile } from 'node:fs/promises';

import type { APIRoute } from 'astro';

import { type Edition, type ProtocolId } from '../../../../lib/protocolos';

export const prerender = false;

function commerceBaseFromTrackEndpoint(trackEndpoint: string) {
  const endpoint = (trackEndpoint || '').trim();
  if (!endpoint) return '';
  if (endpoint.endsWith('/track')) return endpoint.slice(0, -'/track'.length);
  return endpoint.replace(/\/+$/, '');
}

function getPdfFileUrl(edition: Edition, protocolId: ProtocolId) {
  if (protocolId !== 'P001') return null;

  const byEdition: Partial<Record<Edition, string>> = {
    'pt-br': 'P001-pt-br.pdf',
    'es-ar': 'P001-es-ar.pdf',
    'es-cl': 'P001-es-cl.pdf',
  };
  const filename = byEdition[edition];
  if (!filename) return null;

  return new URL(`../../../src/private/protocolos/P001/${filename}`, import.meta.url);
}

export const GET: APIRoute = async ({ params, request }) => {
  const edition = 'pt-br' as const satisfies Edition;
  const protocolId = String(params.protocolId || '').trim() as ProtocolId;

  const u = new URL(request.url);
  const sessionId = String(u.searchParams.get('session_id') || '').trim();
  if (!sessionId) return new Response('missing_session_id', { status: 403 });

  const pdfUrl = getPdfFileUrl(edition, protocolId);
  if (!pdfUrl) return new Response('not_found', { status: 404 });

  const base = commerceBaseFromTrackEndpoint(import.meta.env.PUBLIC_TRACK_ENDPOINT || '');
  if (!base) return new Response('fail_closed', { status: 403 });

  let status;
  try {
    const res = await fetch(`${base}/checkout/status?session_id=${encodeURIComponent(sessionId)}`, { method: 'GET' });
    status = await res.json().catch(() => null);
  } catch {
    status = null;
  }

  const entitled = Boolean(status?.ok && status?.paid && status?.entitlement_active);
  const statusProtocolId = status?.protocol_id ? String(status.protocol_id) : null;
  if (!entitled || statusProtocolId !== protocolId) return new Response('denied', { status: 403 });

  const pdf = await readFile(pdfUrl);
  return new Response(pdf, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': `inline; filename="${protocolId}-${edition}.pdf"`,
      'cache-control': 'no-store',
    },
  });
};
