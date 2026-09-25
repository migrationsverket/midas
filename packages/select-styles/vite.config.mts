import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const root = import.meta.dirname

export default defineConfig(() => ({
  root,
  cacheDir: '../../node_modules/.vite/packages/select-styles',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: '*.md', dest: '.' },
        { src: 'package.json', dest: '.' },
      ],
    }),
  ],
  build: {
    outDir: '../../dist/packages/select-styles',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        'react-select': path.join(root, 'src/lib/react-select.css'),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
