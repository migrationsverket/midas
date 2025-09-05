import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { join, resolve, relative, extname } from 'node:path'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'

const src = resolve(__dirname, 'src')
const index = resolve(src, 'index.ts')

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
      entry: index,
      name: 'components',
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries([
        ['index', index],
        ['global.css', resolve(src, 'theme/global.css')],
        ['theme.css', resolve(src, 'theme/theme.css')],
        ['variables.css', resolve(src, 'theme/variables.css')],
        ...globSync(`${src}/*/index.ts`).map(file => [
          // 1. The name of the entry point
          // packages/components/src/calendar/Calendar.tsx becomes calendar/Calendar
          relative(src, file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // packages/components/src/calendar/Calendar.tsx becomes /home/adalovelace/projects/midas/packages/components/src/calendar/Calendar.tsx
          fileURLToPath(new URL(relative(__dirname, file), import.meta.url)),
        ]),
      ]),
      output: [
        {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
          format: 'es',
        },
        // TODO: Maybe remove the commonJS support entirely, I guess no one uses require("@midas-ds/components")
        {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].cjs',
          format: 'cjs',
        },
      ],
    },
  },
})
