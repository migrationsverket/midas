import { forwardRef } from 'react'
import clsx from '../utils/clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components'
import styles from './Text.module.css'

export type TextSize = 'small'

export interface TextProps extends AriaTextProps {
  /**
   * The size of the text. When omitted, uses the default size.
   * The style type (body vs description) is derived from the slot prop.
   */
  size?: TextSize
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

const DEFAULT_ELEMENT = 'span'

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      size,
      isExpressive = false,
      elementType = DEFAULT_ELEMENT,
      ...rest
    },
    ref,
  ) => {
    const getClassName = () => {
      const isDescription = rest.slot === 'description'
      if (isDescription) {
        return size === 'small'
          ? styles['description-small']
          : styles['description']
      }
      return size === 'small' ? styles['body-small'] : styles['body']
    }

    const textProps: TextProps = {
      className: clsx(
        getClassName(),
        {
          [styles.bold]: ['b', 'strong'].includes(elementType),
          [styles.italic]: ['i', 'em'].includes(elementType),
        },
        className,
      ),
      elementType: elementType || DEFAULT_ELEMENT,
      ...(isExpressive && { 'data-expressive': true }),
      ...rest,
    }

    return (
      <AriaText
        ref={ref}
        {...textProps}
      />
    )
  },
)

Text.displayName = 'Text'
