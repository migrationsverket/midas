import clsx from 'clsx'
import {
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
} from 'react-aria-components'
import type { LinkDOMProps } from '@react-types/shared'
import { Check, ChevronRight } from 'lucide-react'
import type { MenuItemObject } from '.'
import styles from './Menu.module.css'

export type MenuItemProps<T> = Omit<AriaMenuItemProps<T>, keyof LinkDOMProps>

export const MenuItem = <T extends MenuItemObject>(props: MenuItemProps<T>) => (
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
