import { DependenciesExecutorSchema } from './schema'
import {
  ExecutorContext,
  writeJsonFile
} from '@nx/devkit'
import { createPackageJson } from '@nx/js'
import { promisify } from 'util'
import { exec } from 'child_process'

export default async function buildExecutor(
  options: DependenciesExecutorSchema,
  context: ExecutorContext
) {
  console.info('Generating package.json...')
  console.info(`Options: ${JSON.stringify(options, null, 2)}`)

  const packageJson = createPackageJson(
    context.projectName,
    context.projectGraph,
    {
      root: context.root,
      isProduction: true // We want to strip any non-prod dependencies
    }
  )

  console.log(context.projectsConfigurations.projects)

  const filteredPackageJson = !!options.filter ? {
    ...packageJson,
    dependencies: Object.entries(packageJson.dependencies).filter(v =>
      v.every(k => !k.startsWith(options.filter))
    ).reduce((acc, curr) => {
      acc[curr[0]] = curr[1]
      return acc
    }, {} as Record<string, unknown>)
  } : packageJson


  writeJsonFile(`packages/components/package.json`, filteredPackageJson)


  console.info('package.json', filteredPackageJson)
  const { stdout, stderr } = await promisify(exec)(`echo ${filteredPackageJson}`, {})

  const success = !stderr
  return { success }

}
