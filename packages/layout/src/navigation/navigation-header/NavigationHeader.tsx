'use client'

import { useContext } from 'react'
import { clsx, Text, TextProps } from '@midas-ds/components'
import { SidebarContext } from '../../sidebar'
import styles from './NavigationHeader.module.css'

export const NavigationHeader = ({ className, ...rest }: TextProps) => {
  const sidebarContext = useContext(SidebarContext)

  return (
    <Text
      className={clsx(className, styles.navigationHeader, {
        [styles.collapsed]: sidebarContext?.isCollapsed,
      })}
      {...rest}
    />
  )
}
