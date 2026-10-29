import { defaultClientConditions } from 'vite'
import type { UserConfig } from 'vite'
import dts from 'unplugin-dts/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  resolve: {
    // Resolves the workspace packages to their sources, see their exports
    conditions: ['@midas-ds/source', ...defaultClientConditions],
  },
  plugins: [
    libInjectCss(),
    dts({
      // The published types: no declaration maps, which would point at
      // sources that aren't published, and not a project references build
      compilerOptions: { composite: false, declarationMap: false },
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      // Stories and tests aren't part of the published types
      exclude: [
        '**/*.stories.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        // Imported translations, part of the JavaScript
        '**/*.json',
      ],
    }),
    viteStaticCopy({
      targets: [
        { src: '*.md', dest: '.' },
        { src: 'package.json', dest: '.' },
      ],
    }),
  ],
  build: {
    outDir: '../../dist/packages/table-styles',
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: ['src/index.ts', 'src/lib/tanstack-table.css'],
      formats: ['es'],
    },
    rolldownOptions: {
      external: [
        '@midas-ds/components',
        '@midas-ds/theme',
        '@tanstack/react-table',
        'lucide-react',
        'react-aria',
        'react-aria-components',
        'react-dom',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
} satisfies UserConfig
