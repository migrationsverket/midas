'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'
import useObserveElement from '../utils/useObserveElement'
import { windowSizes } from '../theme'

export interface TabsProps extends Omit<AriaTabsProps, 'orientation'> {
  /**
   * Amount of children must match the amount of tabs
   */
  children: React.ReactNode
}

export const Tabs: React.FC<TabsProps> = ({ children, className, ...rest }) => {
  const { width: bodyWidth } = useObserveElement(
    typeof document === 'undefined' ? null : document.body,
    { includePadding: true },
  )

  const orientation: AriaTabsProps['orientation'] =
    bodyWidth >= windowSizes.md ? 'horizontal' : 'vertical'

  return (
    <AriaTabs
      orientation={orientation}
      className={clsx(styles.container, className)}
      {...rest}
    >
      {children}
    </AriaTabs>
  )
}
