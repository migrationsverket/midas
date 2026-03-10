'use client'

import { forwardRef } from 'react'
import {
  Button as AriaButton,
  ButtonContext,
  ButtonProps as AriaButtonProps,
  composeRenderProps,
  useContextProps,
} from 'react-aria-components'
import { LucideIcon } from 'lucide-react'
import clsx from '../utils/clsx'
import { Size } from '../common/types'
import { Spinner } from '../spinner'
import styles from './Button.module.css'

/**
 * Button to perform various actions.
 *
 * @interface ButtonProps
 *
 * @see {@link https://designsystem.migrationsverket.se/components/button}
 */
export interface ButtonProps extends AriaButtonProps {
  /**
   * Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label
   *
   * @default 'primary'
   * */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'
  /**
   * Adds width: 100%; for the button to span entire width of parent
   *
   * @default false
   */
  fullwidth?: boolean
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   **/
  size?: Size
  /** Add an icon from lucide-react
   *
   * @see {@link https://lucide.dev/icons/|Lucide}
   */
  icon?: LucideIcon
  /**
   * Adjust icon size
   *  @default 20
   * */
  iconSize?: number
  /** Display the icon on the left or right side of the button text */
  iconPlacement?: 'left' | 'right'
  /**
   * A pseudo-disabled state that enable focus but disables the `onPress` event.
   * If combined with `isDisabled`, `isDisabled` takes precedence.
   */
  isInactive?: boolean
}

/**
 * @deprecated since v17.0.0 please use `ButtonProps` instead
 */
export type MidasButton = ButtonProps

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [mergedProps, mergedRef] = useContextProps(props, ref, ButtonContext)
    const {
      className,
      fullwidth,
      icon: IconComponent,
      iconPlacement,
      iconSize,
      isPending,
      size = 'large',
      variant = 'primary',
      ...rest
    } = mergedProps

    const isInactive = !mergedProps.isDisabled && mergedProps.isInactive

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
          size === 'medium' && styles.medium,
          iconPlacement === 'right' && styles.iconRight,
          className,
        )}
        data-inactive={isInactive || undefined}
        aria-disabled={isInactive}
        ref={mergedRef}
        {...rest}
        onPress={e => !isInactive && props.onPress?.(e)}
        onPressChange={e => !isInactive && props.onPressChange?.(e)}
        onPressEnd={e => !isInactive && props.onPressEnd?.(e)}
        onPressStart={e => !isInactive && props.onPressStart?.(e)}
        onPressUp={e => !isInactive && props.onPressUp?.(e)}
      >
        {composeRenderProps(mergedProps.children, children => (
          <>
            {IconComponent && !isPending && (
              <IconComponent
                aria-hidden
                size={iconSize ?? 20}
              />
            )}
            {isPending && <Spinner small />}
            {children}
          </>
        ))}
      </AriaButton>
    )
  },
)

Button.displayName = 'Button'
