'use client'

import * as React from 'react'
import { Tab as AriaTab, TabProps as AriaTabProps } from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'

export const Tab: React.FC<AriaTabProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <AriaTab
      {...props}
      className={clsx(styles.listItem, className)}
    >
      {children}
    </AriaTab>
  )
}
