import * as React from 'react'
import {
  ListBoxSection as AriaListBoxSection,
  type ListBoxSectionProps as AriaListBoxSectionProps,
} from 'react-aria-components'

export interface ListBoxSectionProps<T extends object>
  extends Omit<AriaListBoxSectionProps<T>, 'children'> {
  children?: React.ReactNode
}

export const ListBoxSection = <T extends object>({
  children,
  ...rest
}: ListBoxSectionProps<T>) => (
  <AriaListBoxSection {...rest}>
    {children}
  </AriaListBoxSection>
)
