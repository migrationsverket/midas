import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/utils',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
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
