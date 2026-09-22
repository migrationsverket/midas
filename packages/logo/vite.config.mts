import type { UserConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { join } from 'node:path'

const root = import.meta.dirname

export default {
  root,
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
      tsconfigPath: join(root, 'tsconfig.lib.json'),
      pathsToAliases: false,
      include: ['src'],
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
        '@midas-ds/theme',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
} satisfies UserConfig
