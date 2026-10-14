import { mergeConfig } from 'vitest/config'
import { visualConfig } from '@midas-ds/visual-testing'
import viteConfig from './vite.config.mts'

// Visual regression tests, see tools/visual-testing/README.md
export default mergeConfig(viteConfig, visualConfig)
