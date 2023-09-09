import { resolve } from 'path';
import { defineConfig } from 'vite';
import envify from 'process-envify';
import vue from '@vitejs/plugin-vue';
import vueRoutes from 'vite-plugin-vue-routes';
import unocss from 'unocss/vite';
import { presetUno, presetIcons, transformerDirectives } from 'unocss';

export default defineConfig({
  define: envify({
    PORTAL_URL: process.env.PORTAL_URL ?? 'http://localhost:8000',
    PRODUCT_URL: process.env.PRODUCT_URL ?? 'http://localhost:8001',
  }),
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
      theme: {
        colors: {
          primary: {
            '50': '#f3f2ff',
            '100': '#e9e8ff',
            '200': '#d6d4ff',
            '300': '#b8b1ff',
            '400': '#9585ff',
            '500': '#6644ff',
            '600': '#6030f7',
            '700': '#531ee3',
            '800': '#4418bf',
            '900': '#39169c',
            '950': '#210b6a',
          },
          secondary: {
            '50': '#fef1fa',
            '100': '#fee5f6',
            '200': '#feccee',
            '300': '#ff99dd',
            '400': '#fe68c9',
            '500': '#f83cb0',
            '600': '#e81a8f',
            '700': '#ca0c72',
            '800': '#a70d5e',
            '900': '#8b1050',
            '950': '#55022d',
          },
        },
      },
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
        target: 'http://127.0.0.1:3000',
        ws: true,
      },
    },
  },
});
