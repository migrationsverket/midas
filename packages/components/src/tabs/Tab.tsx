'use client'

import * as React from 'react'
import { Tab as AriaTab, TabProps } from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'

export const Tab: React.FC<TabProps> = ({ className, ...props }) => {
  return (
    <AriaTab
      {...props}
      className={clsx(styles.listItem, className)}
    />
  )
}

export type { TabProps }
