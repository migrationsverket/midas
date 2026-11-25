import * as React from 'react'
import styles from './Badge.module.css'
import clsx from '../utils/clsx'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** A short label, e.g. the number of unread messages. Without it, the badge is a dot */
  children?: React.ReactNode
}

export const Badge = ({ children, className, ...rest }: BadgeProps) => {
  const hasChildren = React.Children.count(children) > 0

  return (
    <span
      data-badge
      className={clsx(
        styles.badge,
        hasChildren && styles.hasChildren,
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
