'use client'

import * as React from 'react'
import styles from './Button.module.css'
import {
  Button as AriaButton,
  ButtonProps,
  ButtonRenderProps
} from 'react-aria-components'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'

export interface MidasButtonProps {
  /** Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  fullwidth?: boolean
  size?: 'small'
  icon?: LucideIcon /**Optional icon prop */
  iconSize?: number /**Optional prop to customize icon size */
  iconPlacement?: 'left' | 'right'
  children?:
    | React.ReactNode
    | ((
        values: ButtonRenderProps & {
          defaultChildren: React.ReactNode | undefined
        }
      ) => React.ReactNode)
    | string
}

type MidasButton = MidasButtonProps & ButtonProps

/**
 * Buttons are used when the user should performed an action, for example send a form.
 */

export const Button: React.FC<MidasButton> = ({
  variant = 'primary',
  fullwidth,
  className,
  iconPlacement,
  size,
  icon: IconComponent,
  iconSize,
  ...rest
}) => {
  const effectiveIconSize = size === 'small' ? 14 : iconSize || 20

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
        iconPlacement === 'right' && styles.iconRight,
        className
      )}
      {...rest}
    >
      <>
        {IconComponent && (
          <IconComponent
            aria-hidden
            size={effectiveIconSize}
          />
        )}
        {rest.children}
      </>
    </AriaButton>
  )
}
