// @ts-check
import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [image(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});