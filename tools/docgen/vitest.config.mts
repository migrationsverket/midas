import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'docgen',
    environment: 'node',
    // Each test builds real TypeScript programs over the component packages
    testTimeout: 120_000,
  },
})
