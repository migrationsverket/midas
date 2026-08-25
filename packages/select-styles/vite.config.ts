import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { cssAliases } from '../../tools/vite/css-aliases'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/select-styles',
  plugins: [viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] })],
  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
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
