import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { cssAliases } from '../../tools/vite/css-aliases'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/datepicker-styles',
  plugins: [viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] })],
  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
  build: {
    outDir: '../../dist/packages/datepicker-styles',
    emptyOutDir: true,
    reportCompressedSize: true,
    rolldownOptions: {
      input: {
        'react-datepicker': path.join(
          __dirname,
          'src/lib/react-datepicker.css',
        ),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
