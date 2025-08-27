import clsx from 'clsx'
import { MenuItem as AriaMenuItem, MenuItemProps } from 'react-aria-components'
import { Check, ChevronRight } from 'lucide-react'
import styles from './Menu.module.css'

export type { MenuItemProps }

export const MenuItem = <T extends object>(props: MenuItemProps<T>) => (
  <AriaMenuItem
    {...props}
    textValue={
      props.textValue ||
      (typeof props.children === 'string' ? props.children : undefined)
    }
    className={clsx(styles.menuItem, props.className)}
  >
    {({ hasSubmenu, isSelected, selectionMode }) => (
      <>
        {selectionMode !== 'none' && (
          <Check
            size={16}
            className={styles.checkMark}
            data-selected={isSelected || undefined}
          />
        )}
        <div className={styles.mainContent}>
          <>{props.children}</>
        </div>
        {hasSubmenu && <ChevronRight size={20} />}
      </>
    )}
  </AriaMenuItem>
)
