import { Decorator, Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import '../src/theme/global.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import React, { useEffect } from 'react'
import { globalModes } from './modes'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../src/utils/storybook'
import { semantic } from '../src/theme'
import { I18nProvider } from '../src/utils/intl'
import { useGlobals } from '@storybook/preview-api'

// 🔹 Decorator to sync globals <-> controls
const SyncGlobalsWithArgs: Decorator = (Story, context) => {
  const [globals, updateGlobals] = useGlobals()
  const { args } = context

  const syncKeys: (keyof typeof globals)[] = ['size'] // add other keys if needed

  // Controls → Globals only
  useEffect(
    () => {
      syncKeys.forEach(key => {
        if (args[key] && args[key] !== globals[key]) {
          updateGlobals({ [key]: args[key] })
        }
      })
    },
    syncKeys.map(key => args[key]),
  )

  return <Story {...context} />
}
const preview: Preview = {
  async beforeEach() {
    MockDate.set(mockedNow.toDate(getLocalTimeZone()))
    return () => {
      MockDate.reset()
    }
  },
  parameters: {
    backgrounds: {
      default: 'Background',
      values: [
        { name: 'Background', value: semantic.background },
        { name: 'Layer 01', value: semantic.layer01 },
        { name: 'Layer 02', value: semantic.layer02 },
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
      modes: globalModes,
    },
    a11y: { test: 'error', element: '#storybook-root' },
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
    background: 'Background',
  },
  decorators: [
    SyncGlobalsWithArgs,
    (Story, context) => {
      const RootTag: React.ElementType =
        context?.parameters?.rootElement || 'main'

      const story = document.querySelector<HTMLElement>('body')

      if (story) {
        story.style.colorScheme = context.globals.scheme
        story.style.transition = 'none'
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
