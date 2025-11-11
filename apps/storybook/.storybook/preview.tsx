import { Preview } from '@storybook/react'
import { customViewports } from './custom-viewports'
import React, { useRef, createContext, useEffect } from 'react'
import MockDate from 'mockdate'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../src/utils/storybook'
import { variables } from '@midas-ds/theme'
import { I18nProvider } from 'react-aria'
import '@midas-ds/theme/lib/fonts.css'
import '@midas-ds/theme/lib/color-scheme.css'
import '@midas-ds/theme/lib/style-dictionary-dist/variables.css'
import './custom.css'
import {
  customDarkTheme,
  customLightTheme,
  getPreferredColorScheme,
} from './custom-theme'

const ThemeScopeContext = createContext<'light' | 'dark' | null>(null)

// Global singleton to track the currently active theme
let activeTheme: 'light' | 'dark' | null = null
let activeThemeTimeout: NodeJS.Timeout | null = null

// Component that applies theme to portals
function ThemeScopeProvider({
  theme,
  children
}: {
  theme: 'light' | 'dark'
  children: React.ReactNode
}) {
  const scopeRef = useRef<HTMLDivElement>(null)
  const scopeId = useRef(`theme-scope-${theme}-${Math.random().toString(36).substr(2, 9)}`).current

  useEffect(() => {
    // Track focus and interactions to set this scope as active
    const handleInteraction = (e: Event) => {
      const target = e.target as HTMLElement
      if (scopeRef.current?.contains(target)) {
        // Set this theme as the active one
        activeTheme = theme

        // Clear any existing timeout
        if (activeThemeTimeout) {
          clearTimeout(activeThemeTimeout)
        }

        // Reset after a delay (in case no portal opens)
        activeThemeTimeout = setTimeout(() => {
          activeTheme = null
        }, 1000)
      }
    }

    // Watch for portals being added to body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            // Check if this is an overlay/popover/portal
            const isOverlay =
              node.hasAttribute('data-overlay-container') ||
              node.querySelector('[data-overlay-container]') ||
              node.matches('[class*="Popover"]') ||
              node.querySelector('[class*="Popover"]') ||
              node.matches('[role="dialog"]') ||
              node.querySelector('[role="dialog"]') ||
              node.matches('[data-overlay]')

            if (isOverlay && activeTheme === theme) {
              // Apply theme to the portal
              node.setAttribute('data-theme', theme)

              // Also apply to nested containers
              const overlayContainers = node.querySelectorAll('[data-overlay-container]')
              overlayContainers.forEach(container => {
                container.setAttribute('data-theme', theme)
              })
            }
          }
        })
      })
    })

    // Listen to various interaction events
    document.addEventListener('mousedown', handleInteraction, true)
    document.addEventListener('focusin', handleInteraction, true)
    document.addEventListener('keydown', handleInteraction, true)

    observer.observe(document.body, {
      childList: true,
      subtree: true // Watch subtree too in case portals are nested
    })

    return () => {
      document.removeEventListener('mousedown', handleInteraction, true)
      document.removeEventListener('focusin', handleInteraction, true)
      document.removeEventListener('keydown', handleInteraction, true)
      observer.disconnect()
    }
  }, [theme, scopeId])

  return (
    <ThemeScopeContext.Provider value={theme}>
      <div ref={scopeRef} data-theme-scope={theme} data-theme={theme} data-scope-id={scopeId}>
        {children}
      </div>
    </ThemeScopeContext.Provider>
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
    backgrounds: { value: 'layer02' },
  },
  decorators: [
    (Story, context) => {
    const globalsBackground = context.globals.backgrounds?.value;
      return (
        <I18nProvider locale={context.globals.lang}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', height: 'fit-content'}}>
            <div style={{
              colorScheme: 'dark',
              backgroundColor: context.parameters.backgrounds.options[globalsBackground]?.value,
              padding: '2rem',
              minWidth: '300px',
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              height: '100%'
            }}>
              <ThemeScopeProvider theme="dark">
                <Story />
              </ThemeScopeProvider>
            </div>

            <div style={{
              colorScheme: 'light',
              backgroundColor: context.parameters.backgrounds.options[globalsBackground]?.value,
              padding: '2rem',
              minWidth: '300px',
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              height: '100%'
            }}>
              <ThemeScopeProvider theme="light">
                <Story />
              </ThemeScopeProvider>
            </div>
          </div>
        </I18nProvider>
      )
    }
  ],
  tags: ['autodocs', 'snapshot'],
}

export default preview
