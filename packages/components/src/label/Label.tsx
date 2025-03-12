import * as React from 'react'
import clsx from 'clsx'
import {
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
} from 'react-aria-components'
import styles from './Label.module.css'

type Variant = 'label-01' | 'label-02'

export interface LabelProps extends AriaLabelProps {
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

  const labelProps: LabelProps = {
    className: clsx(classNames[variant], className),
    ...rest,
  }

  return <AriaLabel {...labelProps}>{children}</AriaLabel>
}
