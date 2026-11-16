import { describe, expect, it } from 'vitest'
import * as RAC from 'react-aria-components'
import * as Midas from './index'

const reExports = [
  'Focusable',
  'Pressable',
  'I18nProvider',
  'useLocale',
  'ButtonContext',
  'Form',
  'Collection',
  'Virtualizer',
  'TableLayout',
] as const

describe('react-aria re-exports', () => {
  it.each(reExports)(
    '%s is the same instance as in react-aria-components',
    name => {
      expect(Midas[name]).toBeDefined()
      expect(Midas[name]).toBe(RAC[name])
    },
  )
})
