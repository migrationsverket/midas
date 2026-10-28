import { ExecutorContext } from '@nx/devkit'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

import executor from './build-tokens.js'

const root = resolve(import.meta.dirname, '../../../..')

const context: ExecutorContext = {
  root,
  cwd: process.cwd(),
  isVerbose: false,
  projectGraph: {
    nodes: {},
    dependencies: {},
  },
  projectsConfigurations: {
    projects: {},
    version: 2,
  },
  nxJsonConfiguration: {},
}

describe('BuildTokens Executor', () => {
  // Nx can be started from any folder in the workspace, and passes the paths
  // relative to the workspace root
  it('reads the tokens and writes the files relative to the workspace root', async () => {
    const outDir = mkdtempSync(join(tmpdir(), 'build-tokens-'))
    try {
      const output = await executor(
        {
          source: ['packages/theme/tokens/**/*.json'],
          buildPath: relative(root, outDir),
        },
        context,
      )

      expect(output.success).toBe(true)
      expect(readFileSync(join(outDir, 'variables.css'), 'utf8')).toContain(
        '--midas-',
      )
    } finally {
      rmSync(outDir, { recursive: true, force: true })
    }
  })
})
