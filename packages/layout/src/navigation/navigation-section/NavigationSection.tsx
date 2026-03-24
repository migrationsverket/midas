'use client'

import clsx from 'clsx'
import { useContext } from 'react'
import { Collection, CollectionProps } from '@react-aria/collections'
import { CollapsePanelContext } from '../../panel'
import { NavigationHeader } from '../navigation-header'
import styles from './NavigationSection.module.css'
import { NavigationItem } from '../navigation-item'

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
  const { isCollapsed } = useContext(CollapsePanelContext)

  return (
    <NavigationItem>
      <ul
        className={clsx(className, styles.navigationSection, {
          [styles.collapsed]: isCollapsed,
        })}
      >
        {title && <NavigationHeader>{title}</NavigationHeader>}
        <Collection {...rest} />
      </ul>
    </NavigationItem>
  )
}
