import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from '../utils/clsx'
import { Size } from '@midas-ds/components/common/types.ts'

export interface SkeletonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
   */
  width?: React.CSSProperties['width']
  /**
   * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
   */
  height?: React.CSSProperties['height']
  /**
   * Circular, rectangular, or form field Skeleton component.
   * - When using `circle`, only `width` is allowed to control size.
   * - When using `form`, displays label, description, and input field skeletons. The `size` prop controls the input field height.
   */
  variant?: 'circle' | 'rectangle' | 'form'
  /**
   * Size of the form input field skeleton. Only applies when `variant='form'`.
   * - `medium`: 40px height
   * - `large`: 48px height
   * @default 'large'
   */
  size?: Size
  /**
   * Displays the skeleton component with a wave animation
   * @default true
   */
  isAnimated?: boolean
  /**
   * If skeleton is on a layer01 background light-dark( #f2f2f2, #262626)
   * @default false
   */
  isOnLayer01?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  size = 'large',
  isAnimated = true,
  className,
  style,
  isOnLayer01,
  ...rest
}) => {
  if (variant === 'circle' && height !== undefined) {
    console.warn(
      'Height is not allowed when using circle, control size with width',
    )
  }

  if (variant === 'form') {
    return (
      <div
        className={clsx(
          styles.form,
          styles[size],
          isOnLayer01 && styles.onLayer01,
          className,
        )}
        style={{ width, ...style }}
        {...rest}
      >
        <div
          className={clsx(
            styles.skeleton,
            styles.formLabel,
            isAnimated && styles.wave,
            isOnLayer01 && styles.onLayer01,
          )}
        />
        <div
          className={clsx(
            styles.skeleton,
            styles.formDescription,
            isAnimated && styles.wave,
            isOnLayer01 && styles.onLayer01,
          )}
        />
        <div
          className={clsx(
            styles.skeleton,
            styles.formInput,
            isAnimated && styles.wave,
            isOnLayer01 && styles.onLayer01,
          )}
        />
      </div>
    )
  }

  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[variant],
        isAnimated && styles.wave,
        isOnLayer01 && styles.onLayer01,
        className,
      )}
      style={{ width, height, ...style }}
      {...rest}
    />
  )
}
