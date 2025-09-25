import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
    svgr(),
    tsconfigPaths()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @use "sass:map";
        //   @use "sass:math";
        //   @use "sass:string";
        //   @use "sass:meta";
        // `,
        includePaths: ['static/scss'],
        sassOptions: {
          'no-deprecation-warnings': true, // 关闭所有弃用警告
        },
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      '@@': path.resolve(__dirname, "static")
    }
  },
  server: {
    port: 8001,
    host: true,
    open: true,
    fs: {
      strict: false
    }
  },
  build: {
    outDir: "./dist",
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        format: 'es'
      }
    }
  },
  // 静态资源处理
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
});
