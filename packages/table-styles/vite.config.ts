import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { cssAliases } from '../../tools/vite/css-aliases'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  plugins: [
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
  build: {
    outDir: '../../dist/packages/table-styles',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: ['src/index.ts', 'src/lib/tanstack-table.css'],
      formats: ['es'],
    },
    rolldownOptions: {
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
