'use client'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import { SidebarContext } from '../../sidebar'
import styles from './NavigationItem.module.css'

export type NavigationItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

export const NavigationItem = ({ className, ...rest }: NavigationItemProps) => {
  const sidebarContext = useContext(SidebarContext)

  return (
    <li
      className={clsx(className, styles.navigationItem, {
        [styles.collapsed]: sidebarContext?.isCollapsed,
      })}
      {...rest}
    />
  )
}
