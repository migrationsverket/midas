'use client'

import { forwardRef } from 'react'
import clsx from '../../utils/clsx'
import { Button, type ButtonProps } from '../Button'
import styles from './InactiveButton.module.css'

/**
 * SPIKE – not exported from the package.
 *
 * A button that looks and announces as disabled (`aria-disabled`), but stays
 * focusable and keeps receiving pointer events. The action is blocked in
 * JavaScript instead of by the native `disabled` attribute, which leaves room
 * to explain *why* the button can't be used.
 */
export interface InactiveButtonProps extends ButtonProps {
  /**
   * Looks and announces as disabled, but stays focusable and swallows the action
   *
   * @default false
   */
  isInactive?: boolean
}

export const InactiveButton = forwardRef<
  HTMLButtonElement,
  InactiveButtonProps
>(({ isInactive = false, className, variant = 'primary', ...props }, ref) => {
  if (!isInactive)
    return (
      <Button
        className={className}
        ref={ref}
        variant={variant}
        {...props}
      />
    )

  return (
    <Button
      {...props}
      aria-disabled
      className={clsx(styles.inactive, className)}
      data-variant={variant}
      ref={ref}
      variant={variant}
      // Block the action. Handlers from a parent context (e.g. DialogTrigger)
      // are merged inside Button and still run, which the popover variant uses
      onClick={undefined}
      onPress={undefined}
      onPressEnd={undefined}
      onPressStart={undefined}
      onPressUp={undefined}
      // A submit button would still submit its form, even with aria-disabled
      type='button'
    />
  )
})

InactiveButton.displayName = 'InactiveButton'
