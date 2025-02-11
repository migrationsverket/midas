import { DependenciesExecutorSchema } from './schema'
import {
  detectPackageManager,
  ExecutorContext,
  writeJsonFile
} from '@nx/devkit'
import { createPackageJson, createLockFile, getLockFileName } from '@nx/js'
import { writeFileSync } from 'fs'
import { promisify } from 'util'
import { exec } from 'child_process'

export default async function buildExecutor(
  options: DependenciesExecutorSchema,
  context: ExecutorContext
) {
  console.info('Generating package.json...')
  console.info(`Options: ${JSON.stringify(options, null, 2)}`)
  const packageManager = detectPackageManager()

  const packageJson = createPackageJson(
    context.projectName,
    context.projectGraph,
    {
      root: context.root,
      isProduction: true // We want to strip any non-prod dependencies
    }
  )

  const filteredPackageJson = !!options.filter ? {
    ...packageJson,
    dependencies: Object.entries(packageJson.dependencies).filter(v =>
      v.every(k => !k.startsWith(options.filter))
    ).reduce((acc, curr) => {
      acc[curr[0]] = curr[1]
      return acc
    }, {} as Record<string, unknown>)
  } : packageJson

  const lockFile = createLockFile(
    packageJson,
    context.projectGraph,
    packageManager
  )
  console.info('Generating lock file...')
  const lockFileName = getLockFileName(packageManager)
  writeJsonFile(`${options.outputDir}/package.json`, filteredPackageJson)
  writeFileSync(`${options.outputDir}/${lockFileName}`, lockFile, {
    encoding: 'utf-8'
  })

  console.info('package.json', filteredPackageJson)
  const { stdout, stderr } = await promisify(exec)(`echo ${filteredPackageJson}`, {})

  const success = !stderr
  return { success }

}
