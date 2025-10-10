import { defineConfig, mergeConfig } from 'vitest/config'
import { defineStorybookProject } from './vitest.storybook.project'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 10000,
      reporters: ['default'],
      projects: [
        defineStorybookProject({
          name: 'storybook:forced-colors:dark',
          snapshotSubpath: 'forced-colors:dark',
          context: {
            colorScheme: 'dark',
            forcedColors: 'active',
          },
        }),
      ],
    },
  }),
)
