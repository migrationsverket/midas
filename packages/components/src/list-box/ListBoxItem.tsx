import {
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps as AriaListBoxItemProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './ListBox.module.css'

export interface ListBoxItemProps<T extends object>
  extends AriaListBoxItemProps<T> {
  /**
   * Wheter to hide the checkmarks and checkboxes for selected items
   * @default false
   */
  hideSelectionIndicator?: boolean
}

export const ListBoxItem = <T extends object>({
  children,
  className,
  hideSelectionIndicator,
  ...rest
}: ListBoxItemProps<T>) => (
  <AriaListBoxItem
    className={clsx(styles.listBoxItem, className)}
    data-show-selection={!hideSelectionIndicator || undefined}
    {...rest}
  >
    {children}
  </AriaListBoxItem>
)
