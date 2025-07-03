import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/playground',

  server: {
    port: 4200,
    host: 'localhost',
    historyApiFallback: true,
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are not using a framework that compiles assets over vite. 
  // build: {
  //   outDir: '../../dist/apps/playground',
  //   reportCompressedSize: true,
  //   commonjsOptions: { 
  //     transformMixedEsModules: true,
  //   },
  // },
});