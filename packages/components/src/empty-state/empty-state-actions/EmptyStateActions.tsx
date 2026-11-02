'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import clsx from '../../utils/clsx'
import styles from './EmptyStateActions.module.css'

export type EmptyStateActionsProps = HTMLAttributes<HTMLDivElement>

export const EmptyStateActions = forwardRef<
  HTMLDivElement,
  EmptyStateActionsProps
>(({ className, ...rest }, ref) => (
  <div
    {...rest}
    ref={ref}
    className={clsx(styles.emptyStateActions, className)}
  />
))

EmptyStateActions.displayName = 'EmptyStateActions'
