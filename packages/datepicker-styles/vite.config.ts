import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/datepicker-styles',
  plugins: [
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      pathsToAliases: false,
    }),
  ],
  build: {
    outDir: '../../dist/packages/datepicker-styles',
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        'react-datepicker': path.join(__dirname, 'src/lib/react-datepicker.css'),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
