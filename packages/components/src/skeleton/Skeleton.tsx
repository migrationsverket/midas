import React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'
type SkeletonProps = {
  width?: string | number
  height?: string | number
  variant?:
    | 'text'
    | 'circle'
    | 'rectangular'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
  animation?: 'pulse' | 'wave'
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  animation
}) => {
  const isHeadingVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
    variant
  )
  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[variant],
        animation ? styles[animation] : ''
      )}
      style={{ width, ...(isHeadingVariant ? {} : { height }) }}
    />
  )
}
