import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    nxCopyAssetsPlugin(['*.md']),
  ],
  build: {
    outDir: '../../dist/packages/table-styles',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: ['src/index.ts', 'src/lib/tanstack-table.css'],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@midas-ds/components',
        '@midas-ds/theme',
        'lucide-react',
        'react-aria',
        'react-aria-components',
      ],
    },
  },
} satisfies UserConfig
