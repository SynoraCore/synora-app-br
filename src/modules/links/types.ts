export type LinksItem = {
  label: string;
  href: string;
  icon: string;
  note?: string;
  isPlaceholder?: boolean;
};

export type LinksPage = {
  slug: 'links' | 'claudio' | 'ana-paula' | 'company' | 'media';
  title: string;
  description: string;
  headline: string;
  tagline: string;
  items: LinksItem[];
};

