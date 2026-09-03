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
  const port = options.port.toString()

  process.env.DOCUSAURUS_HIDE_API =
    process.env.DOCUSAURUS_HIDE_API || (options.hideApi ? 'true' : 'false')

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
