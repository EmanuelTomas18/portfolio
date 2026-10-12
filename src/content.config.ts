import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Proyectos: un archivo Markdown por proyecto y por idioma.
 *   src/content/projects/es/<nombre>.md
 *   src/content/projects/en/<nombre>.md
 * Usá el mismo nombre de archivo en las dos carpetas.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    year: z.string(),
    /** Qué hice yo (lideré, desarrollé, participé…). */
    role: z.string(),
    tags: z.array(z.string()),
    /** Menor número = aparece primero. */
    order: z.number().default(99),
    /** Link opcional a un repo o demo. */
    link: z.url().optional(),
  }),
});

export const collections = { projects };
