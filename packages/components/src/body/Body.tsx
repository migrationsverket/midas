import * as React from 'react'
import clsx from 'clsx'
import styles from './Body.module.css'

type Variant = 'normal' | 'compact'
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
  variant = 'normal',
  isExpressive = false,
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    normal: isExpressive ? styles.expressive : styles.normal,
    compact: styles.compact,
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
