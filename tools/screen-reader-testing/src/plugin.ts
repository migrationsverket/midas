/**
 * Nx plugin: gives every project with a src/screen-reader.spec.tsx a
 * `screen-reader` target that runs its screen reader regression tests with
 * vitest.config.screen-reader.mts.
 *
 * Registered in nx.json:
 *   { "plugin": "./tools/screen-reader-testing/src/plugin.ts" }
 */

import { dirname } from 'node:path'
import {
  type CreateNodes,
  type TargetConfiguration,
  createNodesFromFiles,
} from '@nx/devkit'

const screenReaderTarget = (projectRoot: string): TargetConfiguration => ({
  executor: 'nx:run-commands',
  options: {
    command: 'vitest run --config vitest.config.screen-reader.mts',
    cwd: projectRoot,
  },
  cache: true,
  // The stories import other packages' built output
  dependsOn: ['^build'],
  inputs: [
    'default',
    '^production',
    // The shared config, setup and helpers
    '{workspaceRoot}/tools/screen-reader-testing/src/**/*',
    {
      externalDependencies: [
        'vitest',
        '@vitest/browser-playwright',
        '@guidepup/virtual-screen-reader',
      ],
    },
  ],
  metadata: {
    technologies: ['vitest'],
    description:
      'Screen reader regression tests: what a simulated screen reader says for every story tagged `screen-reader`',
  },
})

export const createNodes: CreateNodes = [
  '**/src/screen-reader.spec.tsx',
  (specFiles, options, context) =>
    createNodesFromFiles(
      specFile => {
        const projectRoot = dirname(dirname(specFile))
        return {
          projects: {
            [projectRoot]: {
              targets: { 'screen-reader': screenReaderTarget(projectRoot) },
            },
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
