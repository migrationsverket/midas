import * as React from 'react'
import clsx from 'clsx'
import styles from './Label.module.css'

type Variant = 'normal' | 'bold'

export interface LabelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: React.ReactNode
  /**
   * The visual variant of the component
   */
  variant?: Variant
}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  variant = 'normal',
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    normal: styles.normal,
    bold: styles.bold,
  }

  const classes = clsx(classNames[variant], className)

  return (
    <label
      className={classes}
      {...rest}
    >
      {children}
    </label>
  )
}
