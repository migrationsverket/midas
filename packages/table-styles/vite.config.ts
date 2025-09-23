import { defineConfig } from 'vite'
import * as path from 'path'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  plugins: [
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
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
