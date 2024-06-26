'use client'

import * as React from 'react'
import styles from './Button.module.css'
import { Button as AriaButton, ButtonProps } from 'react-aria-components'
import clsx from 'clsx'

export interface MvdsButton extends ButtonProps {
  /** Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. */
  variant?: 'primary' | 'secondary'
  fullwidth?: boolean
  size?: 'small'
}

/**
 * Buttons are used when the user should performed an action, for example send a form.
 */

export const Button: React.FC<MvdsButton> = ({
  variant = 'primary',
  fullwidth,
  children,
  className,
  size,
  ...rest
}) => {
  return (
    <AriaButton
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        fullwidth && styles.fullwidth,
        size === 'small' && styles.small,
        className
      )}
      {...rest}
    >
      {children}
    </AriaButton>
  )
}
