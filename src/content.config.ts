import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publicacoes = defineCollection({
  loader: glob({ base: 'src/content/publicacoes', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      publication_id: z.string(),
      edition: z.enum(['pt-BR', 'es-CL', 'es-AR']),
      title: z.string(),
      dek: z.string(),
      slug: z.string(),
      type: z.enum(['observation', 'analysis', 'note', 'research']),
      domain: z.enum(['core', 'guardian', 'tourism', 'mediadora', 'audio', 'protocolos', 'institutional']),
      authors: z.array(z.string()),
      status: z.enum(['draft', 'review', 'published', 'archived']),
      published_at: z.coerce.date(),
      updated_at: z.coerce.date().optional(),
      hero: image().optional(),
      hero_alt: z.string().optional(),
      related: z.array(z.string()).max(3).optional()
    })
});

export const collections = { publicacoes };
