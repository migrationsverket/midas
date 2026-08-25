'use client'

import * as React from 'react'
import {
  Tab as AriaTab,
  TabProps,
  composeRenderProps,
  SelectionIndicator,
  DialogContext,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Tabs.module.css'
import { TabsContext } from './TabsContext'

export const Tab: React.FC<TabProps> = ({ className, ...props }) => {
  const { variant, size } = React.useContext(TabsContext)
  const dialogContext = React.useContext(DialogContext)

  return (
    <AriaTab
      {...props}
      className={clsx(
        styles.tab,
        {
          [styles.contained]: variant === 'contained',
          [styles.medium]: size === 'medium',
        },
        className,
      )}
    >
      {composeRenderProps(props.children, children => (
        <>
          {children}
          <SelectionIndicator
            className={clsx(styles.selectionIndicator, {
              [styles.contained]: variant === 'contained',
              // This is a workaround for preventing a bug with animations
              // See: https://github.com/adobe/react-spectrum/issues/9931
              [styles.animated]: !dialogContext,
            })}
          />
        </>
      ))}
    </AriaTab>
  )
}

export type { TabProps }
