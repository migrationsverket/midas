import * as React from 'react'
import clsx from '../utils/clsx'
import {
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps,
} from 'react-aria-components'
import styles from './ListBox.module.css'

export const ListBoxItem = <T extends object>({
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
