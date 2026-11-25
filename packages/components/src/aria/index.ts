'use client'

// Re-exported so consumers use the same react-aria-components instance as Midas.
// Context-based primitives silently break if imported from a different RAC version.
import {
  Focusable as AriaFocusable,
  Pressable as AriaPressable,
  I18nProvider as AriaI18nProvider,
  Form as AriaForm,
  Collection as AriaCollection,
  Virtualizer as AriaVirtualizer,
} from 'react-aria-components'
import { withDisplayName } from '../utils/withDisplayName'

export { useLocale, ButtonContext, TableLayout } from 'react-aria-components'

export const Focusable = withDisplayName(AriaFocusable, 'Focusable')
export const Pressable = withDisplayName(AriaPressable, 'Pressable')
export const I18nProvider = withDisplayName(AriaI18nProvider, 'I18nProvider')
export const Form = withDisplayName(AriaForm, 'Form')
export const Collection = withDisplayName(AriaCollection, 'Collection')
export const Virtualizer = withDisplayName(AriaVirtualizer, 'Virtualizer')

export type {
  Key,
  Selection,
  SortDescriptor,
  DateValue,
} from 'react-aria-components'

export type { DropEvent } from 'react-aria'
