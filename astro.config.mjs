// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

function resolveTerritory() {
  const raw = (process.env.SYNORA_TERRITORY || '').toLowerCase().trim();
  if (raw === 'cl' || raw === 'chile') return 'cl';
  if (raw === 'ar' || raw === 'argentina') return 'ar';
  return 'br';
}

function resolveSite() {
  const override = process.env.SYNORA_SITE?.trim();
  if (override) return override;
  const territory = resolveTerritory();
  if (territory === 'cl') return 'https://synora.cl';
  if (territory === 'ar') return 'https://synora.ar';
  return 'https://synora.app.br';
}

function toPathname(value) {
  if (!value) return '';
  if (value instanceof URL) return value.pathname || '';
  if (typeof value === 'string') {
    if (value.startsWith('/')) return value;
    try {
      return new URL(value, resolveSite()).pathname || '';
    } catch {
      return '';
    }
  }
  if (typeof value === 'object') {
    const maybe = value.pathname || value.url || value.href;
    return toPathname(maybe);
  }
  return '';
}

function isInternalTerritoryRoute(value) {
  const pathname = toPathname(value);
  return pathname.startsWith('/es-ar/') || pathname.startsWith('/es-cl/');
}

export default defineConfig({
  site: resolveSite(),
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter(page) {
        const pathname = toPathname(page);
        if (!pathname) return false;
        if (isInternalTerritoryRoute(pathname)) return false;

        const territory = resolveTerritory();
        if (territory === 'br') {
          if (pathname === '/') return true;
          return pathname === '/pt' || pathname.startsWith('/pt/');
        }

        // CL/AR: publicar apenas superfície ES (+ raiz).
        if (pathname === '/') return true;
        return pathname === '/es' || pathname.startsWith('/es/');
      },
    }),
  ],
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
