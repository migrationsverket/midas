import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/select-styles',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] })],
  build: {
    outDir: '../../dist/packages/select-styles',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        'react-select': path.join(__dirname, 'src/lib/react-select.css'),
      },
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
}))
