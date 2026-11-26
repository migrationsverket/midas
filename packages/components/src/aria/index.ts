'use client'

// Re-exported so consumers use the same react-aria-components instance as Midas.
// Context-based primitives silently break if imported from a different RAC version.
import {
  Focusable,
  Pressable,
  I18nProvider,
  Form,
  Collection,
  Virtualizer,
  RouterProvider,
  MenuTrigger,
  DialogTrigger,
} from 'react-aria-components'
import { withDisplayName } from '../utils/withDisplayName'

withDisplayName(Focusable, 'Focusable')
withDisplayName(Pressable, 'Pressable')
withDisplayName(I18nProvider, 'I18nProvider')
withDisplayName(Form, 'Form')
withDisplayName(Collection, 'Collection')
withDisplayName(Virtualizer, 'Virtualizer')
withDisplayName(RouterProvider, 'RouterProvider')
withDisplayName(MenuTrigger, 'MenuTrigger')
withDisplayName(DialogTrigger, 'DialogTrigger')

export {
  Focusable,
  Pressable,
  I18nProvider,
  Form,
  Collection,
  Virtualizer,
  RouterProvider,
  MenuTrigger,
  DialogTrigger,
}
export { useLocale, ButtonContext, TableLayout } from 'react-aria-components'

export type {
  Key,
  Selection,
  SortDescriptor,
  DateValue,
} from 'react-aria-components'

export type { DropEvent } from 'react-aria'
