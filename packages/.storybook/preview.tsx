// + import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks'
import React from 'react'
import { customViewports } from './custom-viewports'
import '../theme/src/lib/global.css'

export const autoDocsTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    <Stories />
  </>
)
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // a11y: {},
    // actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: 'white' },
        { name: 'Dark', value: '#143c50' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: autoDocsTemplate(),
    viewport: {
      viewports: customViewports,
    },
    storySort: {
      method: 'alphabetical',
      order: ['*', 'Examples', ['Intro', '*']],
    },
  },
}

export default preview
