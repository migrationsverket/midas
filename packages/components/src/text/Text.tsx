import * as React from 'react'
import clsx from '../utils/clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components'
import styles from './Text.module.css'

export type TextSize = 'small'

/**
 * @deprecated Use size prop instead. Only kept for backwards compatibility with body-01 and body-02.
 */
export type TextVariant = 'body-01' | 'body-02'

export interface TextProps extends AriaTextProps {
  /**
   * The size of the text. When omitted, uses the default size.
   * The style type (body vs description) is derived from the slot prop.
   */
  size?: TextSize
  /**
   * @deprecated Use size prop instead. Only body-01 and body-02 are supported for backwards compatibility.
   */
  variant?: TextVariant
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

const DEFAULT_ELEMENT = 'span'

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size,
  variant,
  isExpressive = false,
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const getClassName = () => {
    if (variant === 'body-01') {
      return styles['body-01']
    }
    if (variant === 'body-02') {
      return styles['body-02']
    }

    const isDescription = rest.slot === 'description'
    if (isDescription) {
      return size === 'small' ? styles['description-small'] : styles['description']
    }
    return size === 'small' ? styles['body-small'] : styles['body']
  }

  const textProps: TextProps = {
    className: clsx(getClassName(), className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  return <AriaText {...textProps}>{children}</AriaText>
}
