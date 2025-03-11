import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'

const preview = {
  parameters: {
    backgrounds: {
      default: getPreferredColorScheme() === 'dark' ? 'Dark' : 'Light',
      values: [
        { name: 'Light', value: 'white' },
        { name: 'Dark', value: 'black' },
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
    storySort: {
      method: 'alphabetical',
      order: ['Components', ['Intro', '*'], '*', 'Examples', ['Intro', '*']],
    },
    a11y: { test: 'error' },
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any, context: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Mode = () => {
        const userSelectedBackground:
          | 'white'
          | 'black'
          | 'transparent'
          | undefined = context.globals.backgrounds?.value

        if (
          userSelectedBackground === 'white' ||
          userSelectedBackground === 'black'
        ) {
          return userSelectedBackground === 'black' ? 'dark' : 'light'
        }

        return getPreferredColorScheme()
      }

      return (
        <div
          id={Mode()}
          style={{ colorScheme: Mode() }}
        >
          <Story />
        </div>
      )
    },
  ],
  tags: ['autodocs'],
}

export default preview
