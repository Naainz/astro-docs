import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components', 
        '@layouts': '/src/layouts',       
      },
    },
  },
});
