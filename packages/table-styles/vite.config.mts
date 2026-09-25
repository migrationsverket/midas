import type { UserConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: import.meta.dirname,
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
        '@midas-ds/components',
        '@midas-ds/theme',
        '@tanstack/react-table',
        'react-aria',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
} satisfies UserConfig
