import React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'
type SkeletonProps = {
  width?: string | number
  height?: string | number
  variant?: 'circle' | 'rectangular'
  animation?: 'wave'
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animation
}) => {
  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[variant],
        animation ? styles[animation] : ''
      )}
      style={{ width, height }}
    />
  )
}
