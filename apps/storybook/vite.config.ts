import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/storybook',
  // Keep the Nx plugin: native resolve.tsconfigPaths and the standalone
  // vite-tsconfig-paths package both fail to resolve non-.ts subpath
  // aliases (e.g. '@midas-ds/components/default.css') during dev/test.
  plugins: [react(), nxViteTsPaths()],
  build: {
    target: 'esnext',
  },
})
