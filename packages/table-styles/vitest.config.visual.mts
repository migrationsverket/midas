import { defineVisualConfig } from '@midas-ds/visual-testing'
import viteConfig from './vite.config.mts'

// Visual regression tests, see tools/visual-testing/README.md
export default defineVisualConfig(viteConfig)
