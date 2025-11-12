import React from 'react'
import { Decorator } from '@storybook/react'
import { I18nProvider } from 'react-aria'

export const testDecorator: Decorator = (Story, context) => {
  // Minimal decorator for tests - no dual-theme rendering
  // Wrapped in <section> to prevent nested <header> from creating banner landmark
  return (
    <I18nProvider locale={context.globals.lang || 'sv'}>
      <section>
        <Story />
      </section>
    </I18nProvider>
  )
}
