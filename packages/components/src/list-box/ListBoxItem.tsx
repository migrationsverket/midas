import {
  ListBoxItem as AriaListBoxItem,
  type ListBoxItemProps as AriaListBoxItemProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './ListBox.module.css'
import { useContext } from 'react'
import { ListBoxItemContext } from './ListBoxItemContext'

export interface ListBoxItemProps<T extends object>
  extends AriaListBoxItemProps<T> {
  size?: 'large' | 'small'
}

export const ListBoxItem = <T extends object>({
  children,
  className,
  textValue,
  size = 'large',
  ...rest
}: ListBoxItemProps<T>) => {
  const context = useContext(ListBoxItemContext)

  return (
    <AriaListBoxItem
      className={clsx(styles.listBoxItem, className, {
        [styles.small]: size === 'small' || context.size === 'small',
      })}
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
}
