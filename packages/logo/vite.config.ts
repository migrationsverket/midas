import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/logo',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@midas-ds/theme/variables.css':
        '../theme/src/lib/style-dictionary-dist/variables.css',
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
    outDir: '../../dist/packages/logo',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rolldownOptions: {
      external: [
        '@internationalized/string',
        '@midas-ds/theme',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
} satisfies UserConfig
