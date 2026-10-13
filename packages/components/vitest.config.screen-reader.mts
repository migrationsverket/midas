import { mergeConfig } from 'vitest/config'
import { screenReaderConfig } from '@midas-ds/screen-reader-testing'
import viteConfig from './vite.config.mts'

// Screen reader regression tests, see tools/screen-reader-testing/README.md
export default mergeConfig(viteConfig, screenReaderConfig)
