import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'

export interface SkeletonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  variant?:
    | 'circle'
    | 'rectangle'
    /**
     * @deprecated after v9.0.0 - Use 'rectangle' instead. This will be removed in future versions.
     */
    | 'rectangular'

  /**
   * @deprecated after v9.0.0 - Use 'isAnimated' instead. This will be removed in future versions.
   */
  animation?: 'wave' | false
  /**
   * @default true
   */
  isAnimated?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  animation = 'wave',
  isAnimated = true,
  ...rest
}) => {
  if (variant === 'circle' && height !== undefined) {
    console.warn(
      'Height is not allowed when using circle, control size with width',
    )
  }
  if (variant === 'rectangular') {
    console.warn(
      'Rectangular will be deprecated since v8.4.0 - Use Rectangle instead. This will be removed in future versions',
    )
  }

  return (
    <div
      {...rest}
      className={clsx(
        styles.skeleton,
        styles[variant],
        isAnimated && animation && styles.wave,
      )}
      style={{ width, height }}
    />
  )
}
