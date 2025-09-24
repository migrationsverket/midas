import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dts from 'vite-plugin-dts'
import type { UserConfig } from 'vite'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/theme',
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    nxCopyAssetsPlugin(['*.md']),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/theme',
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: [
        'src/lib/index.ts',
        'src/lib/fonts.css',
        'src/lib/color-scheme.css',
        'src/lib/style-dictionary-dist/variables.css',
      ],
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },
  },
} satisfies UserConfig
