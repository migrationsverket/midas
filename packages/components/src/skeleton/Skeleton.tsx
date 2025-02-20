import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'

type SkeletonProps = {
  width?: string | number
  height?: string | number
  variant?: 'circle' | 'rectangular'
  animation?: 'wave' | false
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animation = 'wave',
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
      )}
      style={{ width, height }}
    />
  )
}
