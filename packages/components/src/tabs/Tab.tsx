'use client'

import * as React from 'react'
import {
  Tab as AriaTab,
  TabProps,
  composeRenderProps,
  SelectionIndicator,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tabs.module.css'

export const Tab: React.FC<TabProps> = ({ className, ...props }) => {
  return (
    <AriaTab
      {...props}
      className={clsx(styles.tab, className)}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <SelectionIndicator className={styles.selectionIndicator}/>
        </>
      ))}
    </AriaTab>
  )
}

export type { TabProps }
