import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import preserveDirectives from 'rollup-preserve-directives'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/accordion',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    libInjectCss(),
    preserveDirectives(),
  ],

  build: {
    outDir: '../../dist/packages/accordion',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'accordion',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        preserveModules: false,
      },
    },
  },
})
