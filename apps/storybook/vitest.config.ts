import { defineConfig, mergeConfig } from 'vitest/config'
import { defineStorybookProject } from './vitest.storybook.project'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      reporters: ['default'],
      projects: [
        defineStorybookProject({
          name: 'storybook',
        }),
      ],
    },
  }),
)
