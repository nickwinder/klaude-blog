import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			categories: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			author: z.string().default('Beard Blog'),
			readingTime: z.string().optional(),
			lastModified: z.coerce.date().optional(),
			seo: z.object({
				canonical: z.string().optional(),
				noindex: z.boolean().default(false),
				keywords: z.array(z.string()).default([]),
			}).optional(),
		}),
});

const wiki = defineCollection({
	// Load wiki/research files
	loader: glob({ base: './src/content/wiki', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			createdDate: z.coerce.date(),
			lastModified: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			type: z.enum(['research', 'note', 'reference']).default('note'),
			status: z.enum(['draft', 'published', 'archived']).default('draft'),
		}),
});

export const collections = { blog, wiki };
