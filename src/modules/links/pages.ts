import type { LinksPage } from './types';

export const LINKS_PAGES: Record<LinksPage['slug'], LinksPage> = {
  links: {
    slug: 'links',
    title: 'Synora | Official Links',
    description: "Official access to Synora's digital channels and institutional resources.",
    headline: 'Synora',
    tagline: 'Transforming Information into Evidence.',
    items: [
      { icon: 'globe', label: 'Website', href: 'https://synora.app.br' },
      { icon: 'book', label: 'Synora Publications', href: 'https://publicacoes.synora.app.br/pt/publicacoes/' },
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/claudiorfuentes' },
      { icon: 'instagram', label: 'Instagram Argentina', href: 'https://instagram.com/synora.arg' },
      { icon: 'instagram', label: 'Instagram Chile', href: 'https://instagram.com/synora.ia' },
      { icon: 'mail', label: 'hello@synora.app.br', href: 'mailto:hello@synora.app.br' },
    ],
  },
  claudio: {
    slug: 'claudio',
    title: 'Synora | Claudio',
    description: "Official profile page (coming soon).",
    headline: 'Claudio',
    tagline: 'Official profile (coming soon).',
    items: [{ icon: 'arrow-left', label: 'Back to Synora Links', href: '/links' }],
  },
  'ana-paula': {
    slug: 'ana-paula',
    title: 'Synora | Ana Paula',
    description: "Official profile page (coming soon).",
    headline: 'Ana Paula',
    tagline: 'Official profile (coming soon).',
    items: [{ icon: 'arrow-left', label: 'Back to Synora Links', href: '/links' }],
  },
  company: {
    slug: 'company',
    title: 'Synora | Company',
    description: "Institutional resources (coming soon).",
    headline: 'Company',
    tagline: 'Institutional resources (coming soon).',
    items: [{ icon: 'arrow-left', label: 'Back to Synora Links', href: '/links' }],
  },
  media: {
    slug: 'media',
    title: 'Synora | Media',
    description: "Media kit and downloads (coming soon).",
    headline: 'Media',
    tagline: 'Media kit and downloads (coming soon).',
    items: [{ icon: 'arrow-left', label: 'Back to Synora Links', href: '/links' }],
  },
};

export function getLinksPage(slug: LinksPage['slug']): LinksPage {
  return LINKS_PAGES[slug];
}
