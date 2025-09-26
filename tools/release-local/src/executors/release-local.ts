import { logger, PromiseExecutor } from '@nx/devkit'
import { ReleaseLocalExecutorSchema } from './schema'
import { releaseVersion, releasePublish } from 'nx/release'
import { readFileSync, promises as fs } from 'fs'
import path = require('path')
import { execSync } from 'node:child_process'

const runExecutor: PromiseExecutor<ReleaseLocalExecutorSchema> = async (
  options,
  context,
) => {
  const registry = options.registry ?? 'http://localhost:4873/'
  // Verdaccio is running in the background with a cleared storage from task `nx run local-registry-clear`

  try {
    logger.info('📦 Running Nx Release API…')
    const { projectsVersionData } = await releaseVersion({
      specifier: 'prerelease',
      preid: 'local',
      dryRun: false,
      gitTag: false,
      gitCommit: false,
      stageChanges: false,
      firstRelease: true,
      gitPush: false,
      verbose: false,
      versionActionsOptionsOverrides: {
        skipLockFileUpdate: true,
      },
    })

    logger.info('🚀 Publishing packages into local Verdaccio…')
    const publishStatus = await releasePublish({
      registry,
      verbose: true,
      dryRun: false,
      firstRelease: true,
    })

    const erroredProjects = Object.keys(publishStatus)
      .filter(key => publishStatus[key].code === 1)
      .join(', ')
    if (erroredProjects.length > 0) {
      throw new Error(
        `Project ${erroredProjects} did not publish successfully.`,
      )
    } else {
      logger.info('🐔 Published successfully.')
    }

    // Collect package versions
    const packageVersions = Object.entries(projectsVersionData).map(
      ([projectName, { newVersion, currentVersion }]) => {
        const project = context.projectGraph.nodes[projectName]
        const packageJson = JSON.parse(
          readFileSync(
            path.resolve(context.root, project.data.root, 'package.json'),
          ).toString(),
        )
        return {
          projectName,
          newVersion,
          currentVersion,
          packageJsonName: packageJson.name,
          packageJsonNameAndVersion: `${packageJson.name}@${newVersion}`,
        }
      },
    )

    // We don't do this now
    if (options.runTests) {
      logger.info(`🚀 Installing published packages..`)

      execSync(
      `npm install ${packageVersions.map(p => p.packageJsonName).join(' ')} --registry=${registry}`,
  )

    logger.info(`👑 Running tests`)
    execSync(`nx test playground`)
    }

    logger.info('✅ Release to local Verdaccio completed')
    return { success: true }
  } catch (e: any) {
    logger.error(`❌ Error: ${e.message}`)
    return { success: false }
  } finally {
    logger.info('Finished.')
  }
}

export default runExecutor
