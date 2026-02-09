import { logger, PromiseExecutor } from '@nx/devkit'
import { ReleaseLocalExecutorSchema } from './schema'
import { releaseVersion, releasePublish } from 'nx/release'
import { readFileSync, promises as fs } from 'fs'
import path = require('path')
import { execSync, spawn } from 'node:child_process'
import { get } from 'node:http'
import { get as httpsGet } from 'node:https'

/**
 * Check if a port is in use and kill any process using it
 */
function ensurePortAvailable(port: number): void {
  try {
    // Check if port is in use and get the PID
    const result = execSync(`lsof -ti:${port}`, { encoding: 'utf-8' }).trim()

    if (result) {
      const pids = result.split('\n')
      logger.warn(`Port ${port} is in use by process(es): ${pids.join(', ')}`)
      logger.info(`Killing process(es) to ensure consistent port usage...`)

      for (const pid of pids) {
        try {
          execSync(`kill -9 ${pid}`)
          logger.info(`Killed process ${pid}`)
        } catch (e) {
          logger.warn(`Failed to kill process ${pid}: ${e.message}`)
        }
      }

      // Wait a moment for the port to be released
      execSync('sleep 1')
      logger.info(`Port ${port} is now available`)
    } else {
      logger.info(`Port ${port} is available`)
    }
  } catch (e) {
    // lsof returns non-zero exit code when port is not in use
    // This is expected and means the port is available
    if (!e.message.includes('code 1')) {
      logger.warn(`Error checking port ${port}: ${e.message}`)
    }
  }
}

/**
 * Wait for Verdaccio to be ready by checking if the registry is accessible
 */
async function waitForRegistry(
  registry: string,
  maxAttempts = 30,
  delayMs = 1000,
): Promise<void> {
  logger.info(`Waiting for Verdaccio at ${registry} to be ready...`)

  const url = new URL(registry)
  const httpGet = url.protocol === 'https:' ? httpsGet : get

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await new Promise<void>((resolve, reject) => {
        const req = httpGet(registry, res => {
          if (res.statusCode === 200) {
            resolve()
          } else {
            reject(new Error(`HTTP ${res.statusCode}`))
          }
          // Consume response to free up memory
          res.resume()
        })

        req.on('error', reject)
        req.setTimeout(5000, () => {
          req.destroy()
          reject(new Error('Timeout'))
        })
      })

      logger.info(`Verdaccio is ready on ${registry}`)
      return
    } catch (e) {
      if (attempt === maxAttempts) {
        throw new Error(
          `Verdaccio did not become ready after ${maxAttempts} attempts`,
        )
      }
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delayMs))
    }
  }
}

const runExecutor: PromiseExecutor<ReleaseLocalExecutorSchema> = async (
  options,
  context,
) => {
  const registry = options.registry ?? 'http://localhost:4873/'
  const port = new URL(registry).port || '4873'

  let verdaccioProcess: any = null

  // Skip Verdaccio setup if requested (e.g., when running in Docker)
  if (!options.skipVerdaccioStart) {
    // Ensure port is available before starting
    logger.info(`Ensuring port ${port} is available for Verdaccio...`)
    ensurePortAvailable(parseInt(port))

    // Clear storage directory
    const storagePath = path.join(context.root, 'tmp/local-registry/storage')
    logger.info(`Clearing local registry storage: ${storagePath}`)
    try {
      execSync(`rm -rf ${storagePath}`)
      logger.info('Storage cleared successfully')
    } catch (e) {
      logger.warn(`Failed to clear storage: ${e.message}`)
    }

    // Create default htpasswd file with test user if it doesn't exist
    const htpasswdPath = path.join(context.root, '.verdaccio/htpasswd')
    logger.info('Ensuring htpasswd file exists with default user...')
    try {
      // Create .verdaccio directory if it doesn't exist
      await fs.mkdir(path.dirname(htpasswdPath), { recursive: true })

      // Create htpasswd with bcrypt hash for password "test"
      // bcrypt hash of "test": $2a$10$...
      const htpasswdContent =
        'test:{SHA}qUqP5cyxm6YcTAhz05Hph5gvu9M=:autocreated 2023-01-01T00:00:00.000Z\n'
      await fs.writeFile(htpasswdPath, htpasswdContent, 'utf-8')
      logger.info('htpasswd file created with test user')
    } catch (e) {
      logger.warn(`Failed to create htpasswd: ${e.message}`)
    }

    // Start Verdaccio directly
    const configPath = path.join(context.root, '.verdaccio/config.yaml')
    logger.info(`Starting Verdaccio on port ${port}...`)

    verdaccioProcess = spawn(
      'npx',
      ['verdaccio', '--config', configPath, '--listen', port],
      {
        cwd: context.root,
        stdio: 'pipe',
        detached: false,
      },
    )

    // Log Verdaccio output
    verdaccioProcess.stdout?.on('data', data => {
      logger.info(`[Verdaccio] ${data.toString().trim()}`)
    })

    verdaccioProcess.stderr?.on('data', data => {
      logger.info(`[Verdaccio] ${data.toString().trim()}`)
    })
  } else {
    logger.info("Skipping Verdaccio startup (assuming it's already running)")
  }

  // Wait for Verdaccio to be ready
  await waitForRegistry(registry)

  // Warm up Verdaccio storage by publishing and unpublishing a dummy package.
  // On a fresh Verdaccio instance, the first publish can fail while storage
  // directories are being initialized. This ensures storage is ready.
  logger.info('Warming up Verdaccio storage...')
  try {
    execSync(
      `npm publish --json --registry=${registry} --access=public`,
      {
        cwd: path.join(context.root, 'tools/release-local/src/warmup-package'),
        stdio: 'pipe',
      },
    )
    execSync(
      `npm unpublish @midas-ds/warmup --force --registry=${registry}`,
      { stdio: 'pipe' },
    )
    logger.info('Verdaccio storage is ready')
  } catch {
    logger.warn('Verdaccio warmup publish failed, continuing anyway')
  }

  // Authenticate with Verdaccio by setting npm credentials directly
  logger.info('Setting npm credentials for local registry...')
  try {
    // Configure npm to use the test user credentials via .npmrc
    // Only set the auth token, NOT the default registry
    const registryUrl = new URL(registry)
    const hostname = registryUrl.hostname
    const npmrcPath = path.join(context.root, '.npmrc')
    const npmrcContent = `//${hostname}:${port}/:_authToken="dGVzdDp0ZXN0"\n`
    await fs.writeFile(npmrcPath, npmrcContent, 'utf-8')
    logger.info(`npm credentials configured for ${hostname}:${port}`)
  } catch (e) {
    logger.error(`Failed to configure npm: ${e.message}`)
    throw e
  }

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
    // Clean up .npmrc
    logger.info('Cleaning up npm configuration...')
    try {
      const npmrcPath = path.join(context.root, '.npmrc')
      await fs.unlink(npmrcPath).catch(() => {})
      logger.info('.npmrc cleaned up')
    } catch (e) {
      logger.warn(`Failed to clean up .npmrc: ${e.message}`)
    }

    // Clean up Verdaccio process (unless keepRunning is true or we didn't start it)
    if (options.skipVerdaccioStart) {
      logger.info('✅ Finished (Verdaccio was not managed by this executor)')
    } else if (options.keepRunning) {
      logger.info(
        '🔄 Keeping Verdaccio running at http://localhost:4873/ (use Ctrl+C to stop)',
      )
      logger.info('📦 Packages are ready for testing!')

      // Keep the process alive
      return new Promise(() => {
        // This promise never resolves, keeping the executor running
        // The Verdaccio process will keep running until manually stopped
      })
    } else {
      if (verdaccioProcess && !verdaccioProcess.killed) {
        logger.info('Stopping Verdaccio...')
        verdaccioProcess.kill('SIGTERM')
        // Give it a moment to shut down gracefully
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (!verdaccioProcess.killed) {
          verdaccioProcess.kill('SIGKILL')
        }
      }
      logger.info('Finished.')
    }
  }
}

export default runExecutor
