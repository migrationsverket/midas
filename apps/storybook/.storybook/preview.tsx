import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import React, { useRef } from 'react'
// import { globalModes } from './modes'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../src/utils/storybook'
import { variables } from '@midas-ds/theme'
import { I18nProvider } from 'react-aria'
import '@midas-ds/theme/lib/fonts.css'
import '@midas-ds/theme/lib/color-scheme.css'
import '@midas-ds/theme/lib/style-dictionary-dist/variables.css'
import './custom.css'
import {UNSAFE_PortalProvider as PortalProvider} from 'react-aria'

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
      // modes: globalModes,
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
  decorators: [
    (Story, context) => {

    const lightRef = useRef(null)
    const darkRef = useRef(null)

    return (
      <I18nProvider locale={context.globals.lang}>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ colorScheme: 'dark', backgroundColor: variables.layer01Base, padding: '2rem' }}>
          <div ref={darkRef} data-portal-root-dark/>
          <PortalProvider getContainer={() => darkRef.current ?? document.body}>

              <Story />
          </PortalProvider>
            </div>



        <div style={{ colorScheme: 'light', backgroundColor: variables.layer01Base, padding: '2rem' }} >
          <div ref={lightRef} data-portal-root-light/>
        <PortalProvider getContainer={() => lightRef.current ?? document.body}>

          <Story />

        </PortalProvider>
        </div>
      </div>
      </I18nProvider>
    )
    }
  ],
  tags: ['autodocs', 'snapshot'],
}

export default preview
