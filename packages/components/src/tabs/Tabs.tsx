'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components'
import clsx from 'clsx'
import useObserveElement from '../utils/useObserveElement'
import { variables } from '@midas-ds/theme'

import styles from './Tabs.module.css'

export interface TabsProps extends AriaTabsProps {

  /**
   * The orientation of the tabs.
   * Will adjust to screen size automatically if omitted
   * @default undefined
   */
  orientation?: AriaTabsProps['orientation']
}



export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  ...rest
}) => {
  const { width: bodyWidth } = useObserveElement(
    typeof document === 'undefined' ? null : document.body,
    { includePadding: true },
  )

  const orientation: AriaTabsProps['orientation'] =
    rest.orientation || bodyWidth >= parseInt(variables.windowSizesSm) ? 'horizontal' : 'vertical'

  return (
    <AriaTabs
      {...rest}
      orientation={orientation}
      className={clsx(styles.container, className)}
      children={children}
    />
  )
}
