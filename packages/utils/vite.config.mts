import type { UserConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { join } from 'node:path'

const root = import.meta.dirname

export default {
  root,
  cacheDir: '../../node_modules/.vite/packages/utils',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
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
    outDir: '../../dist/packages/utils',
    emptyOutDir: true,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rolldownOptions: {
      external: [
        '@internationalized/string',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
} satisfies UserConfig
