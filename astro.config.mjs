// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://synora.app.br',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel(),
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
