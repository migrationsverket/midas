import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxReadySignal } from '@nx/vite/plugins/nx-ready-signal.plugin'

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/storybook',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react(), nxReadySignal()],
  build: {
    target: 'esnext',
  },
})
