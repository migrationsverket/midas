import type { UserConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/table-styles',
  plugins: [
    // Keep the Nx plugin: native resolve.tsconfigPaths and the standalone
    // vite-tsconfig-paths package both fail to resolve non-.ts subpath
    // aliases (e.g. '@midas-ds/components/default.css') during dev/test.
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: 'tsconfig.lib.json',
      pathsToAliases: false,
    }),
    viteStaticCopy({ targets: [{ src: '*.md', dest: '.' }] }),
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
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@midas-ds/components',
        '@midas-ds/theme',
        'lucide-react',
        'react-aria',
        'react-aria-components',
      ],
    },
  },
} satisfies UserConfig
