import type { Preview } from '@storybook/react'
import preview from './preview'
import { testDecorator } from './decorators/tests'

// Test-specific preview that overrides decorators
const testPreview: Preview = {
  ...preview,
  decorators: [testDecorator],
}

export default testPreview
