'use client'

import clsx from 'clsx'
import { useContext } from 'react'
import { Collection, CollectionProps } from '@react-aria/collections'
import { NavigationHeader } from '../navigation-header'
import { NavigationItem } from '../navigation-item'
import { SidebarContext } from '../../sidebar'
import styles from './NavigationSection.module.css'

export interface NavigationSectionProps<
  T extends object,
> extends CollectionProps<T> {
  title?: string
  className?: string
}

export const NavigationSection = <T extends object>({
  className,
  title,
  ...rest
}: NavigationSectionProps<T>) => {
  const sidebarContext = useContext(SidebarContext)

  return (
    <NavigationItem>
      <ul
        className={clsx(className, styles.navigationSection, {
          [styles.collapsed]: sidebarContext?.isCollapsed,
        })}
      >
        {title && <NavigationHeader>{title}</NavigationHeader>}
        <Collection {...rest} />
      </ul>
    </NavigationItem>
  )
}
