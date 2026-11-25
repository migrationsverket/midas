import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import { shared } from '../shared'

const port = 5001

export default defineConfig({
  root: import.meta.dirname,
  // The host loads the remote's chunks from this origin
  base: `http://localhost:${port}/`,
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: { './Widget': './src/Widget.tsx' },
      shared,
      dts: false,
    }),
  ],
  build: { target: 'esnext' },
  preview: { port, strictPort: true, cors: true },
})
