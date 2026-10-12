/**
 * Nx plugin: gives every project with a src/visual.spec.tsx a `visual` target
 * that runs its visual regression tests with vitest.config.visual.mts.
 *
 * Registered in nx.json:
 *   { "plugin": "./tools/visual-testing/src/plugin.ts" }
 */

import { dirname } from 'node:path'
import {
  type CreateNodes,
  type TargetConfiguration,
  createNodesFromFiles,
} from '@nx/devkit'

const visualTarget = (projectRoot: string): TargetConfiguration => ({
  executor: 'nx:run-commands',
  options: {
    command: 'vitest run --config vitest.config.visual.mts',
    cwd: projectRoot,
  },
  cache: true,
  // The stories import other packages' built output
  dependsOn: ['^build'],
  inputs: [
    'default',
    '^production',
    // The shared config, setup and story helpers
    '{workspaceRoot}/tools/visual-testing/src/**/*',
    { externalDependencies: ['vitest', '@vitest/browser-playwright'] },
  ],
  outputs: ['{workspaceRoot}/dist/visual-report/{projectName}'],
  metadata: {
    technologies: ['vitest'],
    description:
      'Visual regression tests: a screenshot of every story tagged `snapshot`',
  },
})

export const createNodes: CreateNodes = [
  '**/src/visual.spec.tsx',
  (specFiles, options, context) =>
    createNodesFromFiles(
      specFile => {
        const projectRoot = dirname(dirname(specFile))
        return {
          projects: {
            [projectRoot]: { targets: { visual: visualTarget(projectRoot) } },
          },
        }
      },
      specFiles,
      options,
      context,
    ),
]

// Older name of the same export
export const createNodesV2 = createNodes
