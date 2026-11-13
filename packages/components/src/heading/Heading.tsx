import { forwardRef } from 'react'
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
   * Enable top and bottom margins
   * @default false
   */
  enableMargins?: boolean
  /**
   * Use the external/expressive look
   * @default false
   */
  isExpressive?: boolean
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      enableMargins = false,
      isExpressive = false,
      level = 3,
      elementType,
      ...rest
    },
    ref,
  ) => {
    const semanticLevel = elementType && parseInt(elementType.split('h')[1])

    return (
      <AriaHeading
        ref={ref}
        level={semanticLevel || level}
        className={clsx(
          [styles.h1, styles.h2, styles.h3, styles.h4, styles.h5, styles.h6][
            level - 1
          ],
          className,
        )}
        {...(isExpressive && { 'data-expressive': true })}
        {...(enableMargins && { 'data-margin': true })}
        {...rest}
      />
    )
  },
)

Heading.displayName = 'Heading'
