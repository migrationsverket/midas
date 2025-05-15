import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'

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
   * Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.
   */
  variant?: 'circle' | 'rectangle'
  /**
   * Displays the skeleton component with a wave animation
   * @default true
   */
  isAnimated?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  isAnimated = true,
  ...rest
}) => {
  if (variant === 'circle' && height !== undefined) {
    console.warn(
      'Height is not allowed when using circle, control size with width',
    )
  }

  return (
    <div
      {...rest}
      className={clsx(
        styles.skeleton,
        styles[variant],
        isAnimated && styles.wave,
      )}
      style={{ width, height }}
    />
  )
}
