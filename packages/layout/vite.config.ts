import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { join, resolve, relative, extname } from 'node:path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

const src = resolve(__dirname, 'src')

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/layout',
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      include: ['src'],
      rollupTypes: false,
    }),
    libInjectCss(),
    preserveUseClientDirective(),
  ],

  build: {
    outDir: '../../dist/packages/layout',
    emptyOutDir: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: {
        index: resolve(src, 'index.ts'),
        ...Object.fromEntries(
          globSync(`${src}/*/index.ts`).map(file => [
            relative(src, file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(relative(__dirname, file), import.meta.url)),
          ]),
        ),
      },
      formats: ['es'],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-aria-components',
        'react-aria',
        'react-stately',
        /@react-aria/,
        /@react-stately/,
        /@internationalized/,
        '@midas-ds/theme',
      ],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        format: 'es',
      },
    },
  },
})
