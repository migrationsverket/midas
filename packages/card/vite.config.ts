/// <reference types='vitest' />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import preserveDirectives from 'rollup-preserve-directives'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/card',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin(),
    {
      name: 'custom-swap-directive',
      generateBundle(_, bundle) {
        for (const chunk of Object.values(bundle)) {
          if (chunk.type === 'chunk') {
            if ('code' in chunk) {
              if (chunk.code.includes('use client')) {
                chunk.code = chunk.code.replace(/['"]use client['"];/, '')
                chunk.code = `'use client';\n${chunk.code}`
              }
              if (chunk.code.includes('use server')) {
                chunk.code = chunk.code.replace(/['"]use server['"];/, '')
                chunk.code = `'use server';\n${chunk.code}`
              }
            }
          }
        }
      },
      enforce: 'post',
    },
    preserveDirectives(),
  ],

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/card',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'card',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  test: {
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/card',
      provider: 'v8',
    },
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
