'use client'

import { useContext, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Collection, CollectionProps } from '@react-aria/collections'
import { clsx } from '@midas-ds/components'
import { CollapsePanelContext } from '../../../panel'
import styles from './NavigationSubMenu.module.css'

export type NavigationSubMenuProps<T extends object> = CollectionProps<T> &
  Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className'>

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
