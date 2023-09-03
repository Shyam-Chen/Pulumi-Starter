import { resolve } from 'path';
import { defineConfig } from 'vite';
import envify from 'process-envify';
import vue from '@vitejs/plugin-vue';
import vueRoutes from 'vite-plugin-vue-routes';
import unocss from 'unocss/vite';
import { presetUno, presetIcons, transformerDirectives } from 'unocss';

export default defineConfig({
  define: envify({}),
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    vueRoutes(),
    unocss({
      presets: [presetUno(), presetIcons()],
      transformers: [transformerDirectives({ enforce: 'pre' })],
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
