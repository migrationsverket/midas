'use client'

import clsx from 'clsx'
import { type ReactNode } from 'react'
import type { ToolbarProps } from 'react-aria-components'
import { HeaderActionsContext } from './HeaderActionsContext'
import styles from './HeaderActions.module.css'

export interface HeaderActionsProps {
  children?: ReactNode
  className?: string
  /**
   * Places each action's label next to its icon, or below it. On small
   * screens the labels are hidden either way, and only the icons show
   *
   * @default 'horizontal'
   */
  orientation?: ToolbarProps['orientation']
}

export const HeaderActions = ({
  children,
  className,
  orientation = 'horizontal',
}: HeaderActionsProps) => (
  <div className={clsx(styles.headerActions, className)}>
    <HeaderActionsContext.Provider value={{ orientation }}>
      {children}
    </HeaderActionsContext.Provider>
  </div>
)
