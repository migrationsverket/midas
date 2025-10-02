import * as React from 'react'
import clsx from '../utils/clsx'
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from 'react-aria-components'
import styles from './Text.module.css'

export interface TextProps extends AriaTextProps {
  /**
   * The visual variant of the component
   */
  variant?: 'body-01' | 'body-02'
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
  const classNames: Record<'body-01' | 'body-02', string> = {
    'body-01': styles['body-01'],
    'body-02': styles['body-02'],
  }

  const textProps: TextProps = {
    className: clsx(
      rest.slot === 'description' ? styles.description : classNames[variant],
      className,
    ),
    elementType: elementType || DEFAULT_ELEMENT,
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  return <AriaText {...textProps}>{children}</AriaText>
}
