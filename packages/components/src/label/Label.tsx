import * as React from 'react'
import clsx from 'clsx'
import {
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
} from 'react-aria-components'
import styles from './Label.module.css'

export interface LabelProps extends AriaLabelProps {
  /**
   * The visual variant of the component
   */
  variant?: 'label-01' | 'label-02'
}

const DEFAULT_ELEMENT = 'label'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  variant = 'label-01',
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const classNames: Record<'label-01' | 'label-02', string> = {
    'label-01': styles['label-01'],
    'label-02': styles['label-02'],
  }

  const labelProps: LabelProps = {
    className: clsx(classNames[variant], className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...rest,
  }

  return <AriaLabel {...labelProps}>{children}</AriaLabel>
}
