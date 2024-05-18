import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { sass } from '@vitejs/plugin-scss';
import path from 'path';

export default defineConfig({
  plugins: [
      vue(),
      //sass()
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://flems.github.io/test/api/news/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

