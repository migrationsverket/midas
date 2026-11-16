'use client'

// Re-exported so consumers use the same react-aria-components instance as Midas.
// Context-based primitives silently break if imported from a different RAC version.
export {
  Focusable,
  Pressable,
  I18nProvider,
  useLocale,
  ButtonContext,
  Form,
  Collection,
  Virtualizer,
  TableLayout,
} from 'react-aria-components'

export type {
  Key,
  Selection,
  SortDescriptor,
  DateValue,
} from 'react-aria-components'

export type { DropEvent } from 'react-aria'
