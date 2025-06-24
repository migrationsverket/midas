'use client'

import * as React from 'react'
import {
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'

export const TabPanel: React.FC<AriaTabPanelProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <AriaTabPanel
      className={clsx(styles.panel, className)}
      {...props}
    >
      {children}
    </AriaTabPanel>
  )
}
