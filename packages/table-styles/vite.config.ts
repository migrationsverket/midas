import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  build: {
    outDir: '../../dist/packages/table-styles',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'tanstack-table': path.join(__dirname, 'src/lib/tanstack-table.css'),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
