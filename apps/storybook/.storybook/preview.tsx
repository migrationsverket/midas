import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../src/utils/storybook'
import { variables } from '@midas-ds/theme'
import '@midas-ds/theme/lib/fonts.css'
import '@midas-ds/theme/lib/color-scheme.css'
import '@midas-ds/theme/lib/style-dictionary-dist/variables.css'
import './custom.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import { presentationDecorator } from './decorators/presentation'

const preview: Preview = {
  async beforeEach() {
    MockDate.set(mockedNow.toDate(getLocalTimeZone()))
    return () => {
      MockDate.reset()
    }
  },
  parameters: {
    docs: {
      theme: getPreferredColorScheme() === 'dark' ? customDarkTheme : customLightTheme
    },
    backgrounds: {
      options: {
        background: { name: 'Background', value: variables.backgroundBase },
        layer01: { name: 'Layer 01', value: variables.layer01Base },
        layer02: { name: 'Layer 02', value: variables.layer02Base },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
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
    a11y: { test: 'error' },
  },
  globalTypes: {
    lang: {
      description: 'Language',
      toolbar: {
        icon: 'globe',
        items: [
          { value: undefined, title: 'System Default' },
          { value: 'en', title: 'English (en)' },
          { value: 'sv', title: 'Svenska (sv)' },
        ],
      },
    },
  },
  initialGlobals: {
    size: 'large',
    lang: 'sv',
    backgrounds: { value: 'background' },
  },
  decorators: [presentationDecorator],
  tags: ['autodocs', 'snapshot'],
}

export default preview
