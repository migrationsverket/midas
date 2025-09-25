import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { join, resolve, relative, extname } from 'node:path'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const src = resolve(__dirname, 'src')
const index = resolve(src, 'index.ts')
const defaultCss = resolve(src, 'default.css')

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/components',
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      include: ['src'],
    }),
    libInjectCss(),
  ],

  build: {
    outDir: '../../dist/packages/components',
    emptyOutDir: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: [
        index,
        resolve(__dirname, '../../packages/theme/src/lib/global.css'),
      ],
      name: 'components',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries([
        ['default', defaultCss],
        ['index', index],

        ...globSync(`${src}/*/index.ts`).map(file => [
          relative(src, file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(relative(__dirname, file), import.meta.url)),
        ]),
      ]),
      output: [
        {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
          format: 'es',
        },
        {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].cjs',
          format: 'cjs',
        },
      ],
    },
  },
})
