import * as React from 'react'
import {
  ListBoxSection as AriaListBoxSection,
  type ListBoxSectionProps as AriaListBoxSectionProps,
} from 'react-aria-components'
import type { ListBoxSectionElement } from './types'
import { ListBoxHeader } from './ListBoxHeader'

export interface ListBoxSectionProps<T extends ListBoxSectionElement>
  extends Omit<AriaListBoxSectionProps<T>, 'children'> {
  name?: React.ReactNode
  children?: React.ReactNode
}

export const ListBoxSection = <T extends ListBoxSectionElement>({
  children,
  name,
  ...rest
}: ListBoxSectionProps<T>) => (
  <AriaListBoxSection {...rest}>
    {name && <ListBoxHeader>{name}</ListBoxHeader>}
    {children}
  </AriaListBoxSection>
)
