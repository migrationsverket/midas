import * as React from 'react'
import clsx from 'clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components'
import styles from './Text.module.css'

export type Variant = 'body-01' | 'body-02'

export interface TextProps extends AriaTextProps {
  /**
   * The visual variant of the component
   */
  variant?: Variant
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

const DEFAULT_ELEMENT = 'span'

export const Text: React.FC<TextProps> = ({
  children,
  className,
  variant = 'body-02',
  isExpressive = false,
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    'body-01': styles['body-01'],
    'body-02': styles['body-02'],
  }

  const textProps: TextProps = {
    className: clsx(classNames[variant], className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  return <AriaText {...textProps}>{children}</AriaText>
}
