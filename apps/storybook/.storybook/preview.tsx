import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'
import React from 'react'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'
import { variables } from '@midas-ds/theme'
import { I18nProvider } from 'react-aria'
import '@midas-ds/theme/lib/fonts.css'
import '@midas-ds/theme/lib/color-scheme.css'
import '@midas-ds/theme/lib/style-dictionary-dist/variables.css'
import './custom.css'

// Stories embedding other stories (via composeStories) render the decorator
// again. Only the outermost one adds the root element, otherwise e.g. a
// composed story's <main> ends up inside the Header's <header> landmark.
const IsInsideStory = React.createContext(false)

interface StoryRootProps {
  rootElement: React.ElementType
  children: React.ReactNode
}

function StoryRoot({ rootElement: RootTag, children }: StoryRootProps) {
  const isInsideStory = React.useContext(IsInsideStory)
  if (isInsideStory) return children
  return (
    <IsInsideStory.Provider value>
      <RootTag>{children}</RootTag>
    </IsInsideStory.Provider>
  )
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
    docs: {
      theme:
        getPreferredColorScheme() === 'dark'
          ? customDarkTheme
          : customLightTheme,
    },
    viewport: {
      options: customViewports,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Components', ['Intro', '*'], '*', 'Examples', ['Intro', '*']],
      },
    },
    chromatic: {},
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
  decorators: [
    (Story, context) => {
      const RootTag: React.ElementType =
        context?.parameters?.rootElement || 'main'

      const body = document.querySelector<HTMLElement>('body')

      if (body) {
        body.style.transition = 'none'
        body.style.background = variables.backgroundBase
      }

      return (
        <StoryRoot rootElement={RootTag}>
          <I18nProvider locale={context.globals.lang}>
            <Story />
          </I18nProvider>
        </StoryRoot>
      )
    },
  ],
  tags: ['autodocs', 'snapshot'],
}

export default preview
