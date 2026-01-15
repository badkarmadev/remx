import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Get all CSS files from src directory
const srcDir = resolve(__dirname, 'src');
const cssFiles = readdirSync(srcDir).filter(file => file.endsWith('.css'));

// Create entries for all CSS files
const input = {};
cssFiles.forEach(file => {
  const name = file.replace('.css', '');
  input[name] = resolve(srcDir, file);
});

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      input,
      output: {
        assetFileNames: '[name].min.css',
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            minifyFontValues: true,
            minifyGradients: true,
          }]
        })
      ]
    }
  }
});
