import * as React from 'react'
import clsx from '../utils/clsx'
import {
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
} from 'react-aria-components'
import styles from './Heading.module.css'

export interface HeadingProps extends AriaHeadingProps {
  /**
   * Override the semantic element of the component but keep the look of the level property
   */
  elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  isExpressive = false,
  level = 3,
  elementType,
  ...rest
}) => {
  const semanticLevel = elementType && parseInt(elementType.split('h')[1])
  return (
    <AriaHeading
      level={semanticLevel || level}
      className={clsx(
        [styles.h1, styles.h2, styles.h3, styles.h4, styles.h5, styles.h6][
          level - 1
        ],
        className,
      )}
      {...(isExpressive && { 'data-expressive': true })}
      {...rest}
    >
      {children}
    </AriaHeading>
  )
}
