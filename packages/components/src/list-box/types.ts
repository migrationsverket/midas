import { Key } from 'react-aria-components'

/**
 * @deprecated since v15.2.0 ListBoxItem will extend `object` from now on
 */
export type ListBoxItemElement = {
  children?: never
  id: Key
  name: string | React.ReactNode
  /**
   * Textual representation of `name` in case it is not a string. Used for searching.
   */
  textValue?: string
  /**
   * Additional properties.
   */
  [prop: string]: unknown
}

/**
 * @deprecated since v15.2.0 ListBoxSection will extend `object` from now on
 */
export type ListBoxSectionElement = {
  children: ListBoxItemElement[]
  name: string
  /**
   * Additional properties for backwards compatibility.
   */
  [prop: string]: unknown
}

export type ListBoxOption = ListBoxItemElement | ListBoxSectionElement
