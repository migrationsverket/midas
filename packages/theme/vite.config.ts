/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import {
  accessibility,
  baseColors,
  borderRadius,
  borderWidths,
  breakpoints,
  buttonColors,
  font,
  fontSizes,
  fontWeights,
  inputColor,
  midasColors,
  midasTransitions,
  signalColors,
} from './src/lib/tokens'
import fs from 'fs'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/theme',

  plugins: [
    {
      name: 'create-colors-css',
      apply: 'build',
      writeBundle() {
        const variableGroups = [
          baseColors,
          buttonColors,
          inputColor,
          signalColors,
          borderRadius,
          borderWidths,
          fontWeights,
          fontSizes,
          midasColors,
          midasTransitions,
          breakpoints,
          accessibility,
          font,
        ]
        let cssContents = ''

        variableGroups.forEach((values, name) => {
          cssContents += `/* ${name} */\n`

          for (const key in values) {
            cssContents += `@value ${key}: ${values[key]};\n`
          }

          cssContents += `\n` // add a newline for readability
        })

        fs.writeFileSync(
          path.join(__dirname, '/src/lib/tokens.css'),
          cssContents
        )
      },
    },
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
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
