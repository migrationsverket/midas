import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'

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

const preview = {
  parameters: {
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
      order: ['Components', ['Intro', '*'], '*', 'Examples', ['Intro', '*']],
    },
    a11y: { test: 'error' },
  },

  tags: ['autodocs'],
}

export default preview
