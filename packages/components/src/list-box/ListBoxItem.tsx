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
  textValue,
  ...rest
}: ListBoxItemProps<T>) => (
  <AriaListBoxItem
    className={clsx(styles.listBoxItem, className)}
    data-show-selection={!hideSelectionIndicator || undefined}
    textValue={
      textValue || (typeof children === 'string' ? children : undefined)
    }
    {...rest}
  >
    {renderProps => (
      <div className={styles.textContent}>
        {typeof children === 'function' ? children(renderProps) : children}
      </div>
    )}
  </AriaListBoxItem>
)
