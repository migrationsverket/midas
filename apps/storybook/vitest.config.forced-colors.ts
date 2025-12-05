import { mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'
import { baseConfig } from './vitest.config.base'

export default mergeConfig(
  viteConfig,
  await baseConfig({
    name: 'forced-colors',
    contextOptions: {
      forcedColors: 'active',
    },
  }),
)
