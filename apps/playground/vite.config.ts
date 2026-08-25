/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cssAliases } from '../../tools/vite/css-aliases'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/apps/playground',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  cacheDir: '../../node_modules/.vite/playground',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react()],

  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
})
