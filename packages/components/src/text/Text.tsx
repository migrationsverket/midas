import * as React from 'react'
import clsx from '../utils/clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components'
import styles from './Text.module.css'

export type TextVariant =
  | 'body'
  | 'bodySmall'
  | 'description'
  | 'descriptionSmall'
  /**
   * @deprecated Use 'body' instead
   */
  | 'body-01'
  /**
   * @deprecated Use 'body' instead
   */
  | 'body-02'

export interface TextProps extends AriaTextProps {
  /**
   * The visual variant of the component
   * @default 'body'
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
  variant = 'body',
  isExpressive = false,
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const classNames: Record<TextVariant, string> = {
    'body': styles['body'],
    'bodySmall': styles['body-small'],
    'description': styles['description'],
    'descriptionSmall': styles['description-small'],
    'body-01': styles['body-01'],
    'body-02': styles['body-02'],
  }

  // When slot="description" is used without explicit variant, default to 'description' variant
  const effectiveVariant = rest.slot === 'description' && variant === 'body' ? 'description' : variant

  const textProps: TextProps = {
    className: clsx(classNames[effectiveVariant], className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  return <AriaText {...textProps}>{children}</AriaText>
}
