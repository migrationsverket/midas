import * as React from 'react'
import {
  ListBoxSection as AriaListBoxSection,
  Header,
  type ListBoxSectionProps as AriaListBoxSectionProps,
} from 'react-aria-components'
import type { ListBoxSectionElement } from './types'
import styles from './ListBox.module.css'

export interface ListBoxSectionProps<T extends ListBoxSectionElement>
  extends Omit<AriaListBoxSectionProps<T>, 'children'> {
  name: React.ReactNode
  children?: React.ReactNode
}

export const ListBoxSection = <T extends ListBoxSectionElement>({
  children,
  name,
  ...rest
}: ListBoxSectionProps<T>) => (
  <AriaListBoxSection {...rest}>
    <Header className={styles.listBoxSectionHeading}>{name}</Header>
    {children}
  </AriaListBoxSection>
)
