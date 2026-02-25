'use client'

import { useContext, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Collection, CollectionProps } from '@react-aria/collections'
import { clsx } from '@midas-ds/components'
import { PanelContext } from '../../../panel'
import { NavigationHeader } from '../header'
import styles from './NavigationSection.module.css'
import { NavigationItem } from '../item'

export interface NavigationSectionProps<T extends object>
  extends
    CollectionProps<T>,
    Pick<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      'className'
    > {
  title?: string
}

export const NavigationSection = <T extends object>({
  className,
  title,
  ...rest
}: NavigationSectionProps<T>) => {
  const { isCollapsed } = useContext(PanelContext)

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
