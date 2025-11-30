import { defineConfig, mergeConfig } from 'vitest/config'
import { defineStorybookProject } from './vitest.storybook.project'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 20000,
      reporters: ['default'],
      projects: [
        defineStorybookProject({
          name: 'storybook:dark-mode',
          snapshotSubpath: 'dark',
          setupFile: 'vitest.setup.a11y.dark.ts',
          context: {
            colorScheme: 'dark',
          },
        }),
      ],
    },
  }),
)
