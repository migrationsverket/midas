import * as React from 'react'
import clsx from 'clsx'
import styles from './Label.module.css'

type Variant = 'label-01' | 'label-02'

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
  variant = 'label-01',
  ...rest
}) => {
  const classNames: Record<Variant, string> = {
    'label-01': styles['label-01'],
    'label-02': styles['label-02'],
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
