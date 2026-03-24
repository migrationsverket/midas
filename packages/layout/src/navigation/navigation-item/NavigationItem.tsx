'use client'

import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import { clsx } from '@midas-ds/components'
import { CollapsePanelContext } from '../../panel'
import styles from './NavigationItem.module.css'

export type NavigationItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

export const NavigationItem = ({ className, ...rest }: NavigationItemProps) => {
  const { isCollapsed } = useContext(CollapsePanelContext)

  return (
    <li
      className={clsx(className, styles.navigationItem, {
        [styles.collapsed]: isCollapsed,
      })}
      {...rest}
    />
  )
}
