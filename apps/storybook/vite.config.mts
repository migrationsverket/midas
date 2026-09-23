import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/storybook',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react()],
  build: {
    target: 'esnext',
  },
})
