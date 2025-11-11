import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview'
import { setProjectAnnotations } from '@storybook/react-vite'
import * as projectAnnotations from './preview'
import { afterAll, beforeAll, vi } from 'vitest'

// Override the preview to force light theme for a11y tests
const a11yAnnotations = {
  ...projectAnnotations,
  default: {
    ...projectAnnotations.default,
    parameters: {
      ...projectAnnotations.default.parameters,
      themeMode: 'light', // Force single light theme for a11y tests
    },
  },
}

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, a11yAnnotations])

beforeAll(() => {
  // Enable RAC Virtualizer in tests
  vi.stubGlobal('process', { env: { VIRT_ON: true } })
})

afterAll(() => {
  vi.unstubAllGlobals()
})
