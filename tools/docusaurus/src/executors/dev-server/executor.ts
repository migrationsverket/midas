import { start } from '@docusaurus/core/lib/index.js'
import { ExecutorContext } from '@nx/devkit'
import { join } from 'node:path'

import { DevServerExecutorSchema } from './schema.js'

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

  const port = options.port.toString()

  await start(projectRoot, {
    port,
    host: options.host,
    hotOnly: options.hotOnly,
    open: options.open,
  })

  yield {
    baseUrl: `http://localhost:${port}`,
    success: true,
  }

  // This Promise intentionally never resolves, leaving the process running
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await new Promise<{ success: boolean }>(() => {})
}
