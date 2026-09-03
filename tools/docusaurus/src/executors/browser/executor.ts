import { build } from '@docusaurus/core/lib/index.js'
import { ExecutorContext } from '@nx/devkit'
import { join } from 'node:path'

import { BrowserExecutorSchema } from './schema.js'

export default async function* runExecutor(
  options: BrowserExecutorSchema,
  context: ExecutorContext,
) {
  const projectRoot = join(
    context.root,
    context.projectsConfigurations.projects[context.projectName ?? ''].root,
  )

  try {
    await build(projectRoot, {
      bundleAnalyzer: options.bundleAnalyzer,
      outDir: join(context.root, options.outputPath),
      minify: options.minify,
    })

    yield {
      success: true,
    }
  } catch (err) {
    console.error(err)
    yield {
      success: false,
    }
  }
}
