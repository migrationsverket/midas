import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cssAliases } from '../../tools/vite/css-aliases'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/storybook',
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
  build: {
    target: 'esnext',
  },
})
