import * as React from 'react'
import clsx from 'clsx'
import styles from './Text.module.css'

type Variant = 'body-01' | 'body-02'
type Component = 'p' | 'span'

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  /**
   * The visual variant of the component
   */
  variant?: Variant
  /**
   * The semantic element of the component
   */
  component?: Component
  /**
   * Use the external/expressive look
   */
  isExpressive?: boolean
}

export const Text: React.FC<TextProps> = ({
  component = 'p',
  children,
  className,
  variant = 'body-02',
  isExpressive = false,
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    'body-01': styles['body-01'],
    'body-02': styles['body-02'],
  }

  const textProps = {
    className: clsx(classNames[variant], className),
    ...(isExpressive && { 'data-expressive': true }),
    ...rest,
  }

  if (component === 'span') {
    return <span {...textProps}>{children}</span>
  }

  return <p {...textProps}>{children}</p>
}
