import { defineConfig, defaultClientConditions } from 'vite'
import react from '@vitejs/plugin-react'
import { nxReadySignal } from '@nx/vite/plugins/nx-ready-signal.plugin'

export default defineConfig({
  root: import.meta.dirname,
  resolve: {
    // Resolves the workspace packages to their sources, see their exports
    conditions: ['@midas-ds/source', ...defaultClientConditions],
  },
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
    host: '0.0.0.0',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxReadySignal()],
})
