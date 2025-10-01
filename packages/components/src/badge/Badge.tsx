import * as React from 'react'
import styles from './Badge.module.css'
import clsx from '../utils/clsx'

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...rest
}) => {
  const hasChildren = React.Children.count(children) > 0

  return (
    <span
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
