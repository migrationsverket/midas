import * as React from 'react'
import clsx from 'clsx'
import { Label as AriaLabel, type LabelProps } from 'react-aria-components'
import styles from './Label.module.css'
import { LabelPopover } from './LabelPopover'

const DEFAULT_ELEMENT = 'label'

interface MidasLabelProps extends LabelProps {
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popoverContent?: React.ReactNode
}

export const Label: React.FC<MidasLabelProps> = ({
  children,
  className,
  elementType = DEFAULT_ELEMENT,
  popoverContent,
  ...rest
}) => {
  const labelProps: LabelProps = {
    className: clsx(styles.labelBase, className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...rest,
  }

  return (
    <AriaLabel {...labelProps}>
      {children}
      {popoverContent && <LabelPopover>{popoverContent}</LabelPopover>}
    </AriaLabel>
  )
}
