import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import { reactOnly, shared } from '../shared'

export default defineConfig({
  root: import.meta.dirname,
  define: {
    'import.meta.env.VITE_REACT_ONLY': JSON.stringify(reactOnly),
  },
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote: {
          type: 'module',
          name: 'remote',
          entry: 'http://localhost:5001/remoteEntry.js',
        },
      },
      shared,
      dts: false,
    }),
  ],
  build: { target: 'esnext' },
  preview: { port: 5000, strictPort: true },
})
