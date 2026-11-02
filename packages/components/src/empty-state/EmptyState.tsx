'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import clsx from '../utils/clsx'
import styles from './EmptyState.module.css'

/**
 * Text and calls to action for empty search results, blank pages etc.
 */
export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Center the content, or align it to the start.
   * @default 'center'
   */
  align?: 'start' | 'center'
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ align = 'center', className, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      className={clsx(styles.emptyState, className)}
      data-align={align}
    />
  ),
)

EmptyState.displayName = 'EmptyState'
