import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { sass } from '@vitejs/plugin-scss';

export default defineConfig({
  base: '',
  plugins: [
      vue(),
      //sass()
  ],
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

