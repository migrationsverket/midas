import * as React from 'react'
import styles from './Badge.module.css'
import { clsx } from '@midas-ds/utils'

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...rest
}) => {
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
