import * as React from 'react'
import clsx from 'clsx'
import {
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
} from 'react-aria-components'
import styles from './Label.module.css'
import useIsDisabled from '../utils/useIsDisabled'

export type LabelVariant = 'label-01' | 'label-02'

export interface LabelProps extends AriaLabelProps {
  /**
   * The visual variant of the component
   */
  variant?: LabelVariant
}

const DEFAULT_ELEMENT = 'label'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  variant = 'label-01',
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const isDisabled = useIsDisabled()

  const classNames: Record<LabelVariant, string> = {
    'label-01': styles['label-01'],
    'label-02': styles['label-02'],
  }

  const labelProps: LabelProps = {
    className: clsx(classNames[variant], className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...rest,
  }

  return (
    <AriaLabel
      {...labelProps}
      data-disabled={isDisabled}
    >
      {children}
    </AriaLabel>
  )
}
