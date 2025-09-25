import { logger, PromiseExecutor } from '@nx/devkit'
import { ReleaseLocalExecutorSchema } from './schema'
import { startLocalRegistry } from '@nx/js/plugins/jest/local-registry';
import {releaseVersion, releasePublish} from 'nx/release'

const runExecutor: PromiseExecutor<
  ReleaseLocalExecutorSchema
> = async (options, context) => {

  const registry = options.registry ?? 'http://localhost:4873/';

  const localRegistryTarget = `${context.projectName}:local-registry`// '@midas-ds/source:local-registry';
  // storage folder for the local registry
  const storage = './tmp/local-registry/storage';
  logger.info(`🔄 Starting local Verdaccio registry on ${registry}`);

  // 1. Start Verdaccio programmatically
/*  global.stopVerdaccio = await startLocalRegistry({
    localRegistryTarget,
    storage,
    verbose: true,
    clearStorage: true,
  });*/

  try {
    // 2. Run release (build + bump dummy versions)
    logger.info('📦 Running Nx Release API…');
    const {projectsVersionData} = await releaseVersion({
      specifier: 'prerelease',
      preid: 'local',
      dryRun: false,
      gitTag: false,
      gitCommit: false,
      stageChanges: false,
      firstRelease: true,
      gitPush: false,
      versionActionsOptionsOverrides: {
        skipLockFileUpdate: true,
      }
    });

    // 3. Publish to local registry
    logger.info('🚀 Publishing packages into local Verdaccio…');
    const publishStatus = await releasePublish({
      registry,
      verbose: true,
      dryRun: false,
      firstRelease: true
    });

    logger.info(publishStatus) // check for exit code 1 and throw

    // 4. Optionally run tests TODO: depending on tests, clear storage or not?

    logger.info('✅ Release to local Verdaccio completed');
    return { success: true };
  } catch (e: any) {
    logger.error(`❌ Error: ${e.message}`);
    return { success: false };
  } finally {
    // 5. Stop Verdaccio cleanly
    logger.info('🛑 Stopping Verdaccio…');
    // Stops anyway?
  }

}

export default runExecutor
