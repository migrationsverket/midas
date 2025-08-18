import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import React from 'react'
import { globalModes } from './modes'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../src/utils/storybook'
import { semantic } from '../src/theme'
import { I18nProvider } from '../src/utils/intl'

const preview: Preview = {
  async beforeEach() {
    MockDate.set(mockedNow.toDate(getLocalTimeZone()))
    return () => {
      MockDate.reset()
    }
  },
  parameters: {
    backgrounds: {
      options: {
        background: 'semantic.background',
        'Layer 01': 'semantic.layer01',
        'Layer 02': 'semantic.layer02',
      },
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
      modes: globalModes,
    },
    a11y: { test: 'error', context: '#storybook-root' },
  },
  globalTypes: {
    scheme: {
      toolbar: {
        title: 'Color Scheme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    size: {
      description: 'Global size for components',
      toolbar: {
        title: 'Size',
        icon: 'expand',
        items: [
          { value: 'medium', title: 'Medium' },
          { value: 'large', title: 'Large' },
        ],
        dynamicTitle: true,
      },
    },
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
    scheme: getPreferredColorScheme(),
    lang: 'sv',
    backgrounds: { value: 'background' },
  },
  decorators: [
    (Story, context) => {
      const RootTag: React.ElementType =
        context?.parameters?.rootElement || 'main'

      const story = document.querySelector<HTMLElement>('body')

      if (story) {
        story.style.colorScheme = context.globals.scheme
        story.style.transition = 'none'
        story.style.background = semantic.background
      }

      return (
        <RootTag
          style={{
            colorScheme: context.globals.scheme,
            backgroundColor: context.globals.backgrounds?.value,
          }}
        >
          <I18nProvider locale={context.globals.lang}>
            <Story />
          </I18nProvider>
        </RootTag>
      )
    },
  ],
  tags: ['autodocs'],
}

export default preview
