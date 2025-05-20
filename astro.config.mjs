// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
        '@hooks': '/src/hooks'
      }
    }
  },

  integrations: [vue(), db()],
  adapter: vercel()
});