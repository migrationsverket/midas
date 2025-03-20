import clsx from 'clsx'
import styles from './ButtonGroup.module.css'
import { ButtonContext } from 'react-aria-components'
import { Label } from '../label'
import * as React from 'react'

export interface MidasButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Set a descriptive visible lable */
  title?: string
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
  title,
  'aria-label': ariaLabel,
  ...rest
}) => {
  if (title && ariaLabel) {
    console.warn(
      'Choose either title and aria-label. Using both title and aria-label will create redundancy for screen reader users.',
    )
  }
  const hasVisibleTitle = title ? true : false
  const id = React.useId()

  return (
    <div
      role='group'
      aria-labelledby={hasVisibleTitle ? id : undefined}
      aria-label={ariaLabel}
      className={clsx(styles.buttonGroupWrapper, className)}
      {...rest}
    >
      {hasVisibleTitle && (
        <Label
          id={id}
          variant='label-02'
          elementType='span'
        >
          {title}
        </Label>
      )}
      <div className={styles.buttonGroup}>{children}</div>
    </div>
  )
}

export { ButtonContext }
