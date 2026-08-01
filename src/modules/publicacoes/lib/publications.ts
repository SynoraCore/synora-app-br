import { getCollection } from 'astro:content';

type Publication = Awaited<ReturnType<typeof getCollection<'publicacoes'>>>[number];

function featuredError(message: string) {
  return new Error(`[Publicações] Featured inválido: ${message}`);
}

export async function listPublishedPtBr() {
  const entries = await getCollection('publicacoes');
  return entries
    .filter((entry) => entry.data.edition === 'pt-BR' && entry.data.status === 'published')
    .sort((a, b) => b.data.published_at.getTime() - a.data.published_at.getTime());
}

export async function resolveFeaturedPtBr(slugs: string[]) {
  const entries = await getCollection('publicacoes');
  const bySlug = new Map<string, Publication>();
  for (const entry of entries) bySlug.set(entry.data.slug, entry);

  const featured: Publication[] = [];
  for (const slug of slugs) {
    const entry = bySlug.get(slug);
    if (!entry) throw featuredError(`slug "${slug}" não encontrado`);
    if (entry.data.edition !== 'pt-BR') throw featuredError(`slug "${slug}" não pertence a pt-BR`);
    if (entry.data.status !== 'published') throw featuredError(`slug "${slug}" não está published`);
    featured.push(entry);
  }

  return featured;
}

export function asHrefPtPublicacoes(slug: string) {
  return `/pt/publicacoes/${slug}/`;
}

export function toCardData(entry: Publication) {
  return {
    title: entry.data.title,
    dek: entry.data.dek,
    type: entry.data.type,
    domain: entry.data.domain,
    publishedAt: entry.data.published_at,
    slug: entry.data.slug,
    hero: entry.data.hero,
    heroAlt: entry.data.hero_alt
  };
}
