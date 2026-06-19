// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://synora.app.br',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: true
    }
  }
});
