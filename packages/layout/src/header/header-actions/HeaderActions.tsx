'use client'

import clsx from 'clsx'
import { type ReactNode } from 'react'
import styles from './HeaderActions.module.css'

export interface HeaderActionsProps {
  children?: ReactNode
  className?: string
}

export const HeaderActions = ({ children, className }: HeaderActionsProps) => (
  <div className={clsx(styles.headerActions, className)}>{children}</div>
)
