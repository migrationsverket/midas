/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dts from 'vite-plugin-dts'
import * as path from 'path'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/theme',

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    nxViteTsPaths(),
  ],

  build: {
    outDir: '../../dist/packages/theme',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    cssCodeSplit: true, // Enable CSS code splitting to keep separate CSS files
    lib: {
      entry: 'src/index.ts', // Ensure this file imports your CSS
      name: 'theme',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: ({ name, ext }) => {
          if (ext === '.css') {
            return '[name][ext]'
          }
          return '[name].[ext]'
        },
      },
    },
  },
})
