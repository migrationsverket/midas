import * as React from 'react'
import {
  ListBoxSection as AriaListBoxSection,
  type ListBoxSectionProps as AriaListBoxSectionProps,
} from 'react-aria-components'
import { ListBoxHeader } from './ListBoxHeader'

export interface ListBoxSectionProps<T extends object>
  extends Omit<AriaListBoxSectionProps<T>, 'children'> {
  /**
   * @deprecated since v15.2.0 please remove as soon as we drop ComboBoxSection.
   * Also consider using only AriaListBoxSectionProps, the custom children is just for the use of ListBoxHeader.
   */
  name?: React.ReactNode
  children?: React.ReactNode
}

export const ListBoxSection = <T extends object>({
  children,
  name,
  ...rest
}: ListBoxSectionProps<T>) => (
  <AriaListBoxSection {...rest}>
    {name && <ListBoxHeader>{name}</ListBoxHeader>}
    {children}
  </AriaListBoxSection>
)
