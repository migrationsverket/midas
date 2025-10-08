import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview'
import { setProjectAnnotations } from '@storybook/react-vite'
import * as projectAnnotations from './preview'
import { afterAll, beforeAll, vi } from 'vitest'
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup'

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([
  a11yAddonAnnotations,
  projectAnnotations,
  ...(!process.env.GITHUB_ACTIONS ? [visAnnotations] : []),
])

beforeAll(() => {
  // Enable RAC Virtualizer in tests
  vi.stubGlobal('process', { env: { VIRT_ON: true } })
})

afterAll(() => {
  vi.unstubAllGlobals()
})

if (!process.env.GITHUB_ACTIONS) {
  vis.setup()
}
