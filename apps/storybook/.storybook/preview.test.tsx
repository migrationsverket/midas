import type { Preview } from '@storybook/react'
import React from 'react'
import { I18nProvider } from 'react-aria'
import preview from './preview'

// Test-specific preview that overrides decorators
const testPreview: Preview = {
  ...preview,
  decorators: [
    (Story, context) => {
      // Minimal decorator for tests - no dual-theme rendering
      return (
        <I18nProvider locale={context.globals.lang || 'sv'}>
          <Story />
        </I18nProvider>
      )
    }
  ],
}

export default testPreview
