import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nickygrey.github.io',
  base: '/showcase',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
