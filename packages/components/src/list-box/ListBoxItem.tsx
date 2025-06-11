import * as React from 'react'
import clsx from 'clsx'
import {
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps,
} from 'react-aria-components'
import type { ListBoxItemElement } from './types'
import styles from './ListBox.module.css'

export const ListBoxItem = <T extends ListBoxItemElement>({
  children,
  className,
  ...rest
}: ListBoxItemProps<T>) => (
  <AriaListBoxItem
    className={clsx(styles.listBoxItem, className)}
    {...rest}
  >
    {children}
  </AriaListBoxItem>
)
