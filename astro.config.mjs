import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://docs.naai.nz',
  integrations: [tailwind(), mdx()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
      },
    },
  },
  build: {
    outDir: 'dist',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'json'],
    },
  },
  experimental: {
    assets: true,
  },
});
