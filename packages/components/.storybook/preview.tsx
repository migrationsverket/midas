/* eslint-disable @nx/enforce-module-boundaries */
import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import 'packages/theme/src/lib/fonts.css'
import 'packages/theme/src/lib/color-scheme.css'
import '../../theme/src/lib/style-dictionary-dist/variables.css'
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
import { variables } from '@midas-ds/theme'
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
        background: variables.backgroundBase,
        'Layer 01': variables.layer01Base,
        'Layer 02': variables.layer02Base,
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
    a11y: { test: 'error' },
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
        story.style.background = variables.backgroundBase
      }

      return (
        <RootTag
          style={{
            colorScheme: context.globals.scheme,
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
