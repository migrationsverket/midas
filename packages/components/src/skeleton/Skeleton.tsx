import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'

type SkeletonProps = {
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
  variant?:
    | 'circle'
    | 'rectangle'
    /**
     * @deprecated since v8.4.0 - Use 'rectangle' instead. This will be removed in future versions.
     */
    | 'rectangular'

  /**
   * @deprecated since v8.4.0 - Use 'isAnimated' instead. This will be removed in future versions.
   */
  animation?: 'wave' | false
  isAnimated?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  animation = 'wave',
  isAnimated = true,
}) => {
  if (variant === 'circle' && height !== undefined) {
    console.warn(
      'Height is not allowed when using circle, control size with width',
    )
  }
  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[variant],
        animation && styles[animation],
        isAnimated && styles.wave,
      )}
      style={{ width, height }}
    />
  )
}
