import { createReadStream, existsSync, statSync } from 'node:fs'
import { resolve, sep } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Serves the report from the last local run (`nx run visual-report:report`)
 * at /local-report/ in dev, which the viewer opens when no report is given.
 */
function localReport(): Plugin {
  const dir = resolve(import.meta.dirname, '../../dist/visual-report-site')
  return {
    name: 'local-visual-report',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/local-report', (req, res, next) => {
        const { pathname } = new URL(req.url ?? '/', 'http://localhost')
        const file = resolve(dir, `.${decodeURIComponent(pathname)}`)
        if (
          !file.startsWith(dir + sep) ||
          !existsSync(file) ||
          !statSync(file).isFile()
        ) {
          return next()
        }
        res.setHeader(
          'Content-Type',
          file.endsWith('.json') ? 'application/json' : 'image/png',
        )
        createReadStream(file).pipe(res)
      })
    },
  }
}

export default defineConfig({
  root: import.meta.dirname,
  // Relative, so the same build works at /visual-report/ and in PR previews
  // (/pr-preview/pr-<n>/visual-report/)
  base: './',
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: '../../dist/apps/visual-report-viewer',
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  cacheDir: '../../node_modules/.vite/visual-report-viewer',
  server: {
    port: 4400,
    host: 'localhost',
  },
  preview: {
    port: 4500,
    host: 'localhost',
  },
  plugins: [react(), localReport()],
})
