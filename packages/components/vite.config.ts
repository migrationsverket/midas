/// <reference types='vitest' />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/components',
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      include: ['src'],
      exclude: ['**/*.stories.{ts,tsx}'],
    }),
    libInjectCss(),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/components',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        theme: resolve(__dirname, 'src/theme/index.ts'),
        global: resolve(__dirname, 'src/theme/global.css'),
      },
      name: 'components',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      // input: Object.fromEntries(
      //   // https://rollupjs.org/configuration-options/#input
      //   glob
      //     .sync('packages/components/src/**/*.{ts,tsx}', {
      //       ignore: ['**/*.d.ts', '**/*.stories.{ts,tsx}']
      //     })
      //     .map(file => [
      //       // 1. The name of the entry point
      //       // lib/nested/foo.js becomes nested/foo
      //       relative('src', file.slice(0, file.length - extname(file).length)),
      //       // 2. The absolute path to the entry file
      //       // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //       /**
      //        * TODO: some error here and can't set folder names correctly in output
      //        */
      //       `${file}`
      //       // fileURLToPath(new URL(file, import.meta.url))
      //     ])
      // ),
      // output: {
      //   // assetFileNames: 'assets/[name][extname]',
      //   // entryFileNames: '[name].js',
      // }
    },
  },
})
