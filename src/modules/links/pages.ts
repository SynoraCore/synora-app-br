import type { LinksPage } from './types';

export const LINKS_PAGES: Record<LinksPage['slug'], LinksPage> = {
  links: {
    slug: 'links',
    title: 'Synora | Official Links',
    description: "Official access to Synora's digital channels and institutional resources.",
    headline: 'Synora',
    tagline: 'Transforming Information into Evidence.',
    items: [
      { icon: '🌐', label: 'Website', href: 'https://synora.app.br' },
      { icon: '📚', label: 'Publications', href: 'https://synora.app.br/publicacoes' },
      { icon: '🤝', label: 'LinkedIn', href: 'https://linkedin.com/in/claudiorfuentes' },
      { icon: '📷', label: 'Instagram Argentina', href: 'https://instagram.com/synora.arg' },
      { icon: '📷', label: 'Instagram Chile', href: 'https://instagram.com/synora.cl' },
      { icon: '✉', label: 'hello@synora.app.br', href: 'mailto:hello@synora.app.br' },
    ],
  },
  claudio: {
    slug: 'claudio',
    title: 'Synora | Claudio',
    description: "Official profile page (coming soon).",
    headline: 'Claudio',
    tagline: 'Official profile (coming soon).',
    items: [{ icon: '↩', label: 'Back to Synora Links', href: '/links' }],
  },
  'ana-paula': {
    slug: 'ana-paula',
    title: 'Synora | Ana Paula',
    description: "Official profile page (coming soon).",
    headline: 'Ana Paula',
    tagline: 'Official profile (coming soon).',
    items: [{ icon: '↩', label: 'Back to Synora Links', href: '/links' }],
  },
  company: {
    slug: 'company',
    title: 'Synora | Company',
    description: "Institutional resources (coming soon).",
    headline: 'Company',
    tagline: 'Institutional resources (coming soon).',
    items: [{ icon: '↩', label: 'Back to Synora Links', href: '/links' }],
  },
  media: {
    slug: 'media',
    title: 'Synora | Media',
    description: "Media kit and downloads (coming soon).",
    headline: 'Media',
    tagline: 'Media kit and downloads (coming soon).',
    items: [{ icon: '↩', label: 'Back to Synora Links', href: '/links' }],
  },
};

export function getLinksPage(slug: LinksPage['slug']): LinksPage {
  return LINKS_PAGES[slug];
}
