import clsx from 'clsx'
import styles from './ButtonGroup.module.css'
import { ButtonContext } from 'react-aria-components'
import * as React from 'react'

export interface MidasButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Set a descriptive lable for screen readers */
  'aria-label'?: string
}

/**
 * Group several buttons together.
 *
 * @interface MidasButtonGroupProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */

export const ButtonGroup: React.FC<MidasButtonGroupProps> = ({
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

export { ButtonContext }
