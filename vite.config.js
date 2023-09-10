import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {

        // Añadir aquí todas las páginas que se vayan a utilizar
        
        main: resolve(__dirname, 'index.html'),
        films: resolve(__dirname, '/src/films/index.html'),
        apropos: resolve(__dirname, '/src/apropos/index.html'),
        equipe: resolve(__dirname, '/src/equipe/index.html'),
        news: resolve(__dirname, '/src/news/index.html'),
      },
    },
  },
}); 

/*

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// vite.config.js
const { resolve } = require('path');

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html')
      }
    }
  }
}

*/