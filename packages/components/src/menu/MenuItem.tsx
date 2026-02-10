import clsx from '../utils/clsx'
import {
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
} from 'react-aria-components'
import { Check, ChevronRight } from 'lucide-react'
import styles from './Menu.module.css'

export type MenuItemProps<T> = AriaMenuItemProps<T>

export const MenuItem = <T extends object>(props: MenuItemProps<T>) => (
  <AriaMenuItem
    {...props}
    textValue={
      props.textValue ||
      (typeof props.children === 'string' ? props.children : undefined)
    }
    className={clsx(styles.menuItem, props.className)}
  >
    {renderProps => {
      const { children } = props
      const { selectionMode, isSelected, hasSubmenu } = renderProps

      return (
        <>
          {selectionMode !== 'none' && (
            <Check
              size={16}
              className={styles.checkMark}
              data-selected={isSelected || undefined}
            />
          )}
          <div className={styles.mainContent}>
            {typeof children === 'function' ? children(renderProps) : children}
          </div>
          {hasSubmenu && <ChevronRight size={20} />}
        </>
      )
    }}
  </AriaMenuItem>
)
