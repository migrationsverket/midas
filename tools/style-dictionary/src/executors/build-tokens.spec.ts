import { ExecutorContext } from '@nx/devkit'
import { describe, expect, it } from 'vitest'

import { BuildTokensExecutorSchema } from './schema'
import executor from './build-tokens'

const options: BuildTokensExecutorSchema = {}
const context: ExecutorContext = {
  root: '',
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
  it('can run', async () => {
    const output = await executor(options, context)
    expect(output.success).toBe(true)
  })
})
