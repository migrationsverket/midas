'use client'

import * as React from 'react'
import { TabPanel as AriaTabPanel, TabPanelProps } from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'

export const TabPanel: React.FC<TabPanelProps> = ({ className, ...props }) => {
  return (
    <AriaTabPanel
      className={clsx(styles.panel, className)}
      {...props}
    />
  )
}

export type { TabPanelProps }
