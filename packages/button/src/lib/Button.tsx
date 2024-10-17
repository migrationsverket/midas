'use client'

import * as React from 'react'
import styles from './Button.module.css'
import {
  Button as AriaButton,
  ButtonProps,
  ButtonRenderProps,
} from 'react-aria-components'
import clsx from 'clsx'
import { ArrowLeft, LucideIcon } from 'lucide-react'
export interface MvdsButton extends ButtonProps {
  /** Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  fullwidth?: boolean
  size?: 'small'
  icon?: LucideIcon
  children?:
    | React.ReactNode
    | ((
        values: ButtonRenderProps & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)
    | string
}

/**
 * Buttons are used when the user should performed an action, for example send a form.
 */

export const Button: React.FC<MvdsButton> = ({
  variant = 'primary',
  fullwidth,
  className,
  size,
  icon: IconComponent,
  ...rest
}) => {
  const TertiaryIcon =
    variant === 'tertiary' && !IconComponent ? ArrowLeft : IconComponent

  return (
    <AriaButton
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'tertiary' && styles.tertiary,
        variant === 'danger' && styles.danger,
        variant === 'icon' && styles.iconBtn,
        fullwidth && styles.fullwidth,
        size === 'small' && styles.small,
        className
      )}
      {...rest}
    >
      <span className={styles.iconBefore}>
        {TertiaryIcon && <TertiaryIcon />}
        {rest.children}
      </span>
    </AriaButton>
  )
}
