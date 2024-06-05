'use client'

import * as React from 'react'
import styles from './button.module.css'
import { Button as AriaButton, ButtonProps } from 'react-aria-components'
import clsx from 'clsx'

export interface MvdsButton extends ButtonProps {
  /** Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. */
  variant?: 'primary' | 'secondary'
  isFullwidth?: boolean
}

/**
 * Buttons are used when the user should performed an action, for example send a form.
 */

export const Button: React.FC<MvdsButton> = ({
  variant = 'primary',
  isFullwidth,
  children,
  className,
  ...rest
}) => {
  return (
    <AriaButton
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        isFullwidth && styles.fullwidth,
        className
      )}
      {...rest}
    >
      {children}
    </AriaButton>
  )
}
