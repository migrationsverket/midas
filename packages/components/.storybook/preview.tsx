import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import React from 'react'
import { modes } from './modes'

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
    chromatic: {
      modes: modes,
    },
    a11y: { test: 'error', element: '#storybook-root' },
  },
  decorators: [
    (Story, context) => {
      const RootTag: React.ElementType =
        context?.parameters?.rootElement || 'main'

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
        const popover = document.querySelector<HTMLElement>('body')
        if (popover) popover.style.colorScheme = colorMode
      }, [colorMode])

      return (
        <RootTag
          style={{
            colorScheme: colorMode,
            backgroundColor: colorMode === 'light' ? 'white' : '#121212',
          }}
        >
          <Story />
        </RootTag>
      )
    },
  ],
  tags: ['autodocs'],
}

export default preview
