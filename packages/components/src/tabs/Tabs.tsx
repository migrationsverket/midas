'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  type TabsProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'

import styles from './Tabs.module.css'
export type { TabsProps }

export const Tabs: React.FC<TabsProps> = ({ children, className, ...props }) => {

  return (
    <AriaTabs
      {...props}
      className={clsx(styles.tabs, className)}
      children={children}
    />
  )
}
