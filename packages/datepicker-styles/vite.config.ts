import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/datepicker-styles',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] })],
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
