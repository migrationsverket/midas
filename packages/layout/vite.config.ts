import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'unplugin-dts/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { join, resolve, relative, extname } from 'node:path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

const src = resolve(__dirname, 'src')
const defaultCss = resolve(src, 'default.css')

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/layout',
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@midas-ds/components/default.css': '../components/src/default.css',
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: '*.md', dest: '.' },
        { src: 'package.json', dest: '.' },
      ],
    }),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      include: ['src'],
      bundleTypes: false,
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
        default: defaultCss,
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
    rolldownOptions: {
      external: [
        '@midas-ds/components',
        '@react-aria/utils',
        '@react-stately/utils',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
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
