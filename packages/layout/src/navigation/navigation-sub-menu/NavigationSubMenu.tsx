'use client'

import clsx from 'clsx'
import { useContext } from 'react'
import { Collection, CollectionProps } from '@react-aria/collections'
import { CollapsePanelContext } from '../../panel'
import styles from './NavigationSubMenu.module.css'

export type NavigationSubMenuProps<T extends object> = CollectionProps<T> & {
  className?: string
}

export const NavigationSubMenu = <T extends object>({
  className,
  children,
  items,
  ...rest
}: NavigationSubMenuProps<T>) => {
  const { isCollapsed } = useContext(CollapsePanelContext)
  const { length: itemLength } = Array.from(items || [])
  const isDynamicCollection = typeof children === 'function'

  if (isDynamicCollection && itemLength === 0) {
    return null
  }

  return (
    <ul
      className={clsx(className, styles.navigationSubMenu, {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <Collection
        items={items}
        {...rest}
      >
        {children}
      </Collection>
    </ul>
  )
}
