import { start } from '@docusaurus/core/lib/index.js'
import { ExecutorContext } from '@nx/devkit'
import { createServer } from 'node:net'
import { join } from 'node:path'

import { DevServerExecutorSchema } from './schema.js'

/**
 * Whether nothing listens on the port yet. Docusaurus checks this itself, but
 * without a terminal it then logs an error and exits with code 0, so Nx would
 * report the task as successful, and with one it asks to switch ports, which
 * a continuous task can't answer.
 *
 * Like Docusaurus, `localhost` is checked on every interface: it can resolve
 * to ::1 while something else holds 127.0.0.1.
 */
const isPortFree = (port: number, host: string) =>
  new Promise<boolean>(resolve => {
    const server = createServer()
      .once('error', () => resolve(false))
      .once('listening', () => server.close(() => resolve(true)))
    if (host === 'localhost') server.listen(port)
    else server.listen(port, host)
  })

export default async function* runExecutor(
  options: DevServerExecutorSchema,
  context: ExecutorContext,
) {
  const projectRoot = join(
    context.root,
    context.projectsConfigurations.projects[context.projectName ?? ''].root,
  )
  // Browserslist is resolved from the cwd, which is the workspace root when
  // running through Nx. Point it at the project's own package.json instead.
  process.env.BROWSERSLIST_CONFIG ??= join(projectRoot, 'package.json')

  // Thrown rather than yielding `success: false`, which Nx ignores for a
  // continuous task
  if (!(await isPortFree(options.port, options.host))) {
    throw new Error(
      `Port ${options.port} is already in use on ${options.host}. Stop what's running there, or pass --port.`,
    )
  }

  await start(projectRoot, {
    port: options.port.toString(),
    host: options.host,
    hotOnly: options.hotOnly,
    open: options.open,
    poll: options.poll,
  })

  // A server listening on all interfaces is reached through localhost
  const host = ['0.0.0.0', '::'].includes(options.host)
    ? 'localhost'
    : options.host

  yield {
    baseUrl: `http://${host}:${options.port}`,
    success: true,
  }

  // This Promise intentionally never resolves, leaving the process running
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await new Promise<{ success: boolean }>(() => {})
}
