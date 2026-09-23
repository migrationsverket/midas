import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const root = import.meta.dirname

export default defineConfig(() => ({
  root,
  cacheDir: '../../node_modules/.vite/packages/datepicker-styles',
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
    outDir: '../../dist/packages/datepicker-styles',
    emptyOutDir: true,
    reportCompressedSize: true,
    rolldownOptions: {
      input: {
        'react-datepicker': path.join(root, 'src/lib/react-datepicker.css'),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
