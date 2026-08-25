import dts from 'vite-plugin-dts'
import type { UserConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { cssAliases } from '../../tools/vite/css-aliases'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/theme',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    viteStaticCopy({
      targets: [
        { src: '*.md', dest: '.' },
        // lightningcss doesn't recognize Tailwind v4's `@theme` at-rule and
        // can't minify it — copy as-is instead of bundling through build.lib.
        {
          src: 'src/lib/style-dictionary-dist/tailwind-theme.css',
          dest: '.',
          rename: { stripBase: true },
        },
      ],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: cssAliases,
  },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/packages/theme',
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: [
        'src/lib/index.ts',
        'src/lib/fonts.css',
        'src/lib/color-scheme.css',
        'src/lib/style-dictionary-dist/variables.css',
      ],
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es'],
    },
  },
} satisfies UserConfig
