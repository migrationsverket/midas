import * as React from 'react'
import {
  ListBoxSection as AriaListBoxSection,
  Header,
  type ListBoxSectionProps as AriaListBoxSectionProps,
} from 'react-aria-components'
import { Label } from '../label'
import styles from './ListBox.module.css'

export interface ListBoxSectionProps<T extends object>
  extends Omit<AriaListBoxSectionProps<T>, 'children'> {
  name: React.ReactNode
  children?: React.ReactNode
}

export const ListBoxSection = <T extends object>({
  children,
  name,
  ...rest
}: ListBoxSectionProps<T>) => (
  <AriaListBoxSection {...rest}>
    <Header>
      <Label
        elementType='span'
        className={styles.listBoxSectionHeading}
      >
        {name}
      </Label>
    </Header>
    {children}
  </AriaListBoxSection>
)
