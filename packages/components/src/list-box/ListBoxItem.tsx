import {
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './ListBox.module.css'

export type { ListBoxItemProps }

export const ListBoxItem = <T extends object>({
  children,
  className,
  textValue,
  ...rest
}: ListBoxItemProps<T>) => (
  <AriaListBoxItem
    className={clsx(styles.listBoxItem, className)}
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
