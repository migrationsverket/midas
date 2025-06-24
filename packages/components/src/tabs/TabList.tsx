'use client'

import * as React from 'react'
import { TabList as AriaTabList, TabListProps } from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'

export const TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <AriaTabList
      className={clsx(styles.list, className)}
      {...props}
    />
  )
}
