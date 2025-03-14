import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import React from 'react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: getPreferredColorScheme() === 'dark' ? 'Dark' : 'Light',
      values: [
        { name: 'Light', value: 'white' },
        { name: 'Dark', value: '#121212' },
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
      const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
        getPreferredColorScheme(),
      )

      React.useEffect(() => {
        const userSelectedBackground:
          | 'white'
          | '#121212'
          | 'transparent'
          | undefined = context.globals.backgrounds?.value

        if (
          userSelectedBackground === 'white' ||
          userSelectedBackground === '#121212'
        ) {
          return setColorMode(
            userSelectedBackground === 'white' ? 'light' : 'dark',
          )
        }

        return setColorMode(getPreferredColorScheme())
      }, [context.globals.backgrounds])

      React.useEffect(() => {
        const popover = document.querySelector('body')
        if (popover) (popover as HTMLElement).style.colorScheme = colorMode
      }, [colorMode])

      return (
        <div
          style={{
            colorScheme: colorMode,
            backgroundColor: colorMode === 'light' ? 'white' : '#121212',
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
