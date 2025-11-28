'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { TabsContext } from './TabsContext'
import styles from './Tabs.module.css'

export interface TabsProps extends AriaTabsProps {
  variant?: 'uncontained' | 'contained'
}

export const Tabs: React.FC<TabsProps> = ({
  className,
  variant = 'uncontained',
  ...rest
}) => {
  return (
    <TabsContext.Provider value={{ variant }}>
      <AriaTabs
        className={clsx(styles.tabs, className)}
        {...rest}
      />
    </TabsContext.Provider>
  )
}
