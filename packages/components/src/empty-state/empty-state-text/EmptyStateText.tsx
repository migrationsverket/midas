'use client'

import { forwardRef } from 'react'
import clsx from '../../utils/clsx'
import { Text, TextProps } from '../../text'
import styles from './EmptyStateText.module.css'

export type EmptyStateTextProps = TextProps

export const EmptyStateText = forwardRef<HTMLElement, EmptyStateTextProps>(
  ({ className, elementType = 'p', ...rest }, ref) => (
    <Text
      className={clsx(styles.emptyStateText, className)}
      elementType={elementType}
      ref={ref}
      {...rest}
    />
  ),
)

EmptyStateText.displayName = 'EmptyStateText'
