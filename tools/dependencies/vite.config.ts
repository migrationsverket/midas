import { defineConfig } from 'vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/tools/dependencies',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
})
