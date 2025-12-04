import { defineConfig, mergeConfig } from 'vitest/config'
import { defineStorybookProject } from './vitest.storybook.project'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 40000,
      reporters: ['default'],
      projects: [
        defineStorybookProject({
          name: 'storybook:forced-colors',
          snapshotSubpath: 'forced-colors',
          context: {
            forcedColors: 'active',
          },
        }),
      ],
    },
  }),
)
