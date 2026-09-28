import { readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ExecutorContext, logger } from '@nx/devkit'
import * as ts from 'typescript'
import {
  type DocgenOptions,
  generateApiDocs,
  readTsConfig,
} from '../../lib/generate.js'
import { watchProgram } from '../../lib/watch.js'
import { writeApiDocs } from '../../lib/write.js'
import type { GenerateExecutorSchema } from './schema.js'

export default async function* runExecutor(
  options: GenerateExecutorSchema,
  context: ExecutorContext,
) {
  const projectName = context.projectName ?? ''
  const projectRoot = join(
    context.root,
    context.projectsConfigurations.projects[projectName].root,
  )
  const tsConfigPath = options.tsConfig
    ? join(context.root, options.tsConfig)
    : join(projectRoot, 'tsconfig.lib.json')
  const outputPath = join(
    context.root,
    options.outputPath ?? join('dist', 'api', projectName),
  )
  const { name: packageName } = JSON.parse(
    readFileSync(join(projectRoot, 'package.json'), 'utf8'),
  )

  const docgenOptions: DocgenOptions = {
    workspaceRoot: context.root,
    projectRoot,
    packageName,
    include: options.include,
    exclude: options.exclude,
  }

  const run = (program: ts.Program) => {
    const start = performance.now()
    const docs = generateApiDocs(program, docgenOptions)
    const { written, removed } = writeApiDocs(outputPath, docs)
    const seconds = ((performance.now() - start) / 1000).toFixed(1)
    logger.info(
      `${packageName}: ${docs.size} API docs in ${seconds}s → ${relative(context.root, outputPath)} ` +
        `(${written.length} written, ${removed.length} removed)`,
    )
  }

  if (!options.watch) {
    try {
      const { fileNames, options: compilerOptions } = readTsConfig(tsConfigPath)
      run(ts.createProgram(fileNames, compilerOptions))
      yield { success: true }
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error))
      yield { success: false }
    }
    return
  }

  let firstRun = true
  let resolveFirstRun: (success: boolean) => void = () => undefined
  const firstRunDone = new Promise<boolean>(resolve => {
    resolveFirstRun = resolve
  })

  watchProgram(tsConfigPath, program => {
    try {
      run(program)
      if (firstRun) resolveFirstRun(true)
    } catch (error) {
      // Keep the previous docs and keep watching, e.g. while a file is mid-edit
      logger.error(error instanceof Error ? error.message : String(error))
      if (firstRun) resolveFirstRun(false)
    }
    firstRun = false
  })

  yield { success: await firstRunDone }

  // Keep watching until the process is stopped
  await new Promise(() => undefined)
}
