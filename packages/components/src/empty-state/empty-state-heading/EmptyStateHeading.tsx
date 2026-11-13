'use client'

import { forwardRef } from 'react'
import clsx from '../../utils/clsx'
import { Heading, HeadingProps } from '../../heading'
import styles from './EmptyStateHeading.module.css'

export type EmptyStateHeadingProps = HeadingProps

export const EmptyStateHeading = forwardRef<
  HTMLHeadingElement,
  EmptyStateHeadingProps
>(({ className, level = 2, ...rest }, ref) => (
  <Heading
    className={clsx(styles.emptyStateHeading, className)}
    level={level}
    ref={ref}
    {...rest}
  />
))

EmptyStateHeading.displayName = 'EmptyStateHeading'
