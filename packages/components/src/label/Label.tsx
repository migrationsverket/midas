import * as React from 'react'
import clsx from 'clsx'
import { Label as AriaLabel, type LabelProps } from 'react-aria-components'
import styles from './Label.module.css'
import { LabelWrapperContext } from './LabelWrapper'

const DEFAULT_ELEMENT = 'label'

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  elementType = DEFAULT_ELEMENT,
  ...rest
}) => {
  const labelProps: LabelProps = {
    className: clsx(styles.labelBase, className),
    elementType: elementType || DEFAULT_ELEMENT,
    ...rest,
  }

  const ctx = React.useContext(LabelWrapperContext)

  return (
    <AriaLabel
      {...labelProps}
      aria-describedby={ctx?.popoverId}
    >
      {children}
    </AriaLabel>
  )
}
