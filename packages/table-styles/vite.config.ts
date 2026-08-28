import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@midas-ds/components/default.css': '../components/src/default.css',
    },
  },
  plugins: [
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    viteStaticCopy({
      targets: [
        { src: '*.md', dest: '.' },
        { src: 'package.json', dest: '.' },
      ],
    }),
  ],
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
