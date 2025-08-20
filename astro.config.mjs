// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://beard-blog.com',
	integrations: [
		mdx(),
		sitemap({
			customPages: [
				'https://beard-blog.com/about',
				'https://beard-blog.com/contact',
				'https://beard-blog.com/newsletter'
			],
			filter: (page) => !page.includes('/draft/'),
		})
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
	},
	build: {
		inlineStylesheets: 'auto',
	},
	server: {
		port: 4321,
		host: true,
	}
});
