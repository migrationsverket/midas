import * as React from 'react'
import clsx from 'clsx'
import styles from './Body.module.css'

type Variant = 'body-01' | 'body-02'
type Component = 'p' | 'span'

export interface BodyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode
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

export const Body: React.FC<BodyProps> = ({ children, ...rest }) => {
  return <Element {...rest}>{children}</Element>
}

const Element: React.FC<BodyProps> = ({
  component = 'p',
  children,
  className,
  variant = 'body-02',
  isExpressive = false,
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    'body-01': styles['body-01'],
    'body-02': isExpressive ? styles.expressive : styles['body-02'],
  }

  const classes = clsx(classNames[variant], className)

  if (component === 'span') {
    return (
      <span
        className={classes}
        {...rest}
      >
        {children}
      </span>
    )
  }

  return (
    <p
      className={classes}
      {...rest}
    >
      {children}
    </p>
  )
}
