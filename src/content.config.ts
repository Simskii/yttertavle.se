import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const nyheter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nyheter' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    category: z.enum(['nyheter', 'verksamhet', 'styrelse', 'underhall']).default('nyheter'),
    author: z.string().default('Styrelsen'),
    draft: z.boolean().default(false),
  }),
});

const evenemang = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenemang' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string(),
    location: z.string().default('Yttertavle Bygdegård'),
    excerpt: z.string(),
    image: z.string().optional(),
    price: z.string().optional(),
    organizer: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { nyheter, evenemang };
