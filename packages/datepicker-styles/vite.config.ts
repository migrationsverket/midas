import { defineConfig } from 'vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/datepicker-styles',
  plugins: [
    // Keep the Nx plugin: native resolve.tsconfigPaths and the standalone
    // vite-tsconfig-paths package both fail to resolve non-.ts subpath
    // aliases (e.g. '@midas-ds/components/default.css') during dev/test.
    nxViteTsPaths(),
    viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] }),
  ],
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
