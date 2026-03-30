'use client'

import * as React from 'react'
import { TabPanel as AriaTabPanel, TabPanelProps } from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tabs.module.css'
import { TabsContext } from './TabsContext'

export const TabPanel: React.FC<TabPanelProps> = ({ className, ...props }) => {
  const { variant, size } = React.useContext(TabsContext)

  return (
    <AriaTabPanel
      className={clsx(
        styles.tabPanel,
        {
          [styles.contained]: variant === 'contained',
          [styles.medium]: size === 'medium',
        },
        className,
      )}
      {...props}
    />
  )
}

export type { TabPanelProps }
