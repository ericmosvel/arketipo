// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://arketipoclima.com.br',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});