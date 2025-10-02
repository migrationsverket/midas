import clsx from '../utils/clsx'
import styles from './ButtonGroup.module.css'
import * as React from 'react'

/**
 * Group several buttons together.
 *
 * @interface React.HTMLAttributes<HTMLDivElement>
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */

export const ButtonGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}) => {
  return (
    <div
      role='group'
      aria-label={ariaLabel}
      className={clsx(styles.buttonGroup, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
