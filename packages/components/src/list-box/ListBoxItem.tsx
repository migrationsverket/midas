import {
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
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
    {composeRenderProps(children, children => (
      <div className={styles.textContent}>{children}</div>
    ))}
  </AriaListBoxItem>
)
