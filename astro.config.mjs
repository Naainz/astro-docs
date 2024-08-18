import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components', 
        '@layouts': '/src/layouts',       
      },
    },
  },
});
