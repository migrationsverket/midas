'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import clsx from '../../utils/clsx'
import styles from './EmptyStateVisual.module.css'

export type EmptyStateVisualProps = HTMLAttributes<HTMLDivElement>

export const EmptyStateVisual = forwardRef<
  HTMLDivElement,
  EmptyStateVisualProps
>(({ className, ...rest }, ref) => (
  <div
    {...rest}
    ref={ref}
    className={clsx(styles.emptyStateVisual, className)}
  />
))

EmptyStateVisual.displayName = 'EmptyStateVisual'
