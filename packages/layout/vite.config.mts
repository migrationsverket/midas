import { defineConfig, defaultClientConditions } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'unplugin-dts/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { join, resolve, relative, extname } from 'node:path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { globSync } from 'glob'
import { fileURLToPath } from 'node:url'
import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

const root = import.meta.dirname
const src = resolve(root, 'src')
const defaultCss = resolve(src, 'default.css')

export default defineConfig({
  root,
  cacheDir: '../../node_modules/.vite/packages/layout',
  resolve: {
    // Resolves the workspace packages to their sources, see their exports
    conditions: ['@midas-ds/source', ...defaultClientConditions],
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
      // The published types: no declaration maps, which would point at
      // sources that aren't published, and not a project references build
      compilerOptions: { composite: false, declarationMap: false },
      entryRoot: 'src',
      tsconfigPath: join(root, 'tsconfig.lib.json'),
      include: ['src'],
      bundleTypes: false,
      // Stories and tests aren't part of the published types
      exclude: ['**/*.stories.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
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
            fileURLToPath(new URL(relative(root, file), import.meta.url)),
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
        'clsx',
        'lucide-react',
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
