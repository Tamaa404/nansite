import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const updatesCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/updates' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['AI', 'Teaching', 'Personal', 'Robotics', 'Web Dev']),
    description: z.string(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const teachingCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/teaching' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subject: z.enum(['Arduino', 'Python']),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  updates: updatesCollection,
  projects: projectsCollection,
  teaching: teachingCollection,
};
