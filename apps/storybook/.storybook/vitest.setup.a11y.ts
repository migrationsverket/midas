import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview'
import { setProjectAnnotations } from '@storybook/react-vite'
import * as projectAnnotations from './preview'
import { afterAll, beforeAll, vi } from 'vitest'
import React from 'react'

// Override preview to use light theme with section wrapper
const a11yAnnotations = {
  ...projectAnnotations,
  default: {
    ...projectAnnotations.default,
    parameters: {
      ...projectAnnotations.default.parameters,
      themeMode: 'light', // Force light theme
    },
    decorators: [
      // Wrap stories in <section> to prevent banner landmark issues
      (Story: any, context: any) => {
        const OriginalDecorator = projectAnnotations.default.decorators?.[0]
        if (OriginalDecorator) {
          return React.createElement('section', { role: 'presentation' }, OriginalDecorator(Story, context))
        }
        return React.createElement('section', { role: 'presentation' }, React.createElement(Story))
      },
    ],
  },
}

setProjectAnnotations([a11yAddonAnnotations, a11yAnnotations])

beforeAll(() => {
  // Enable RAC Virtualizer in tests
  vi.stubGlobal('process', { env: { VIRT_ON: true } })
})

afterAll(() => {
  vi.unstubAllGlobals()
})
