/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import fs from 'fs'

const TOKENS_FILE = path.join(__dirname, '/src/lib/figma/data.json')

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/theme',

  plugins: [
    {
      name: 'create-colors-css',
      apply: 'build',
      writeBundle() {
        const tokensJson = fs.readFileSync(TOKENS_FILE, 'utf-8')
        const tokens = JSON.parse(tokensJson)

        const primitiveTokens = {}
        const aliasedTokens = {}

        tokens.forEach((group) => {
          const { name, values } = group
          const groupedTokens =
            name === 'Primitives' ? primitiveTokens : aliasedTokens

          values.forEach((value) => {
            for (const type in value) {
              const tokens = Array.isArray(value[type]) ? value[type] : []
              tokens.forEach((token) => {
                const { name, value, rootAlias } = token
                const [groupName, tokenName] = name.split('/')
                if (!groupedTokens[groupName]) {
                  groupedTokens[groupName] = {}
                }
                groupedTokens[groupName][tokenName] = rootAlias || value
              })
            }
          })
        })

        let cssContents = ''

        for (const groupName in primitiveTokens) {
          cssContents += `/* ${groupName} */\n`

          for (const tokenName in primitiveTokens[groupName]) {
            cssContents += `@value ${tokenName}: ${primitiveTokens[groupName][tokenName]};\n`
          }

          cssContents += `\n` // add a newline for readability
        }

        for (const groupName in aliasedTokens) {
          cssContents += `/* ${groupName} */\n`

          for (const tokenName in aliasedTokens[groupName]) {
            const rootAlias = aliasedTokens[groupName][tokenName]
            if (rootAlias) {
              const [rootGroup, rootToken] = rootAlias.split('/')
              if (
                primitiveTokens[rootGroup] &&
                primitiveTokens[rootGroup][rootToken]
              ) {
                const value = primitiveTokens[rootGroup][rootToken]
                cssContents += `@value ${tokenName}: ${value};\n`
              } else {
                console.warn(
                  `Warning: Token '${tokenName}' references an undefined primitive token '${rootAlias}'`
                )
              }
            } else {
              cssContents += `@value ${tokenName}: ${aliasedTokens[groupName][tokenName]};\n`
            }
          }

          cssContents += `\n` // add a newline for readability
        }

        fs.writeFileSync(
          path.join(__dirname, '/src/lib/tokens-new.css'),
          cssContents
        )
      },
    },
    {
      name: 'create-colors-ts',
      apply: 'build',
      writeBundle() {
        const tokensJson = fs.readFileSync(TOKENS_FILE, 'utf-8')
        const tokens = JSON.parse(tokensJson)

        const primitiveTokens = {}
        const aliasedTokens = {}

        tokens.forEach((group) => {
          const { name, values } = group
          const groupedTokens =
            name === 'Primitives' ? primitiveTokens : aliasedTokens

          values.forEach((value) => {
            for (const type in value) {
              const tokens = Array.isArray(value[type]) ? value[type] : []
              tokens.forEach((token) => {
                const { name, value, rootAlias } = token
                const [groupName, tokenName] = name.split('/')
                if (!groupedTokens[groupName]) {
                  groupedTokens[groupName] = {}
                }
                groupedTokens[groupName][tokenName] = rootAlias
                  ? `${rootAlias.replace('/', '.')}`
                  : value
              })
            }
          })
        })

        let tsContents = ''

        for (const groupName in primitiveTokens) {
          tsContents += `export const ${groupName} = {\n`

          for (const tokenName in primitiveTokens[groupName]) {
            tsContents += `  ${tokenName}: '${primitiveTokens[groupName][tokenName]}',\n`
          }

          tsContents += `}\n\n`
        }

        for (const groupName in aliasedTokens) {
          tsContents += `export const ${groupName} = {\n`

          for (const tokenName in aliasedTokens[groupName]) {
            tsContents += `  ${tokenName}: ${aliasedTokens[groupName][tokenName]},\n`
          }

          tsContents += `}\n\n`
        }

        fs.writeFileSync(
          path.join(__dirname, '/src/lib/tokens-new.ts'),
          tsContents
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
