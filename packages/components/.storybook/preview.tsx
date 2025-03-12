import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: getPreferredColorScheme() === 'dark' ? 'Dark' : 'Light',
      values: [
        { name: 'Light', value: 'white' },
        { name: 'Dark', value: 'rgb(18, 18, 18)' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme:
        getPreferredColorScheme() === 'dark'
          ? customDarkTheme
          : customLightTheme,
    },
    viewport: {
      viewports: customViewports,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Components', ['Intro', '*'], '*', 'Examples', ['Intro', '*']],
      },
    },
    a11y: { test: 'error', element: '#storybook-root' },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any, context: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Mode = () => {
        const userSelectedBackground:
          | 'white'
          | 'rgb(18, 18, 18)'
          | 'transparent'
          | undefined = context.globals.backgrounds?.value

        if (
          userSelectedBackground === 'white' ||
          userSelectedBackground === 'rgb(18, 18, 18)'
        ) {
          return userSelectedBackground === 'white' ? 'light' : 'dark'
        }

        return getPreferredColorScheme()
      }

      return (
        <div
          id={Mode()}
          style={{
            colorScheme: Mode(),
            backgroundColor: Mode() === 'light' ? 'white' : 'rgb(18, 18, 18)',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  tags: ['autodocs'],
}

export default preview
