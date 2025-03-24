import clsx from 'clsx'
import { Label } from '../../label'
import styles from '../Select.module.css'
import React, { DOMAttributes } from 'react'
import type { FocusableElement } from '@react-types/shared'

interface SelectLabelProps extends DOMAttributes<FocusableElement> {
  label?: string
  isActive?: boolean
  isDisabled?: boolean
}

export const SelectLabel: React.FC<SelectLabelProps> = ({
  label,
  isActive,
  isDisabled,
  ...rest
}) => {
  if (label) {
    return (
      <Label
        {...rest}
        slot={'label'}
        className={clsx(styles.selectLabel, {
          [styles.selectLabelActive]: isActive,
          [styles.selectLabelDisabled]: isDisabled,
        })}
      >
        {label}
      </Label>
    )
  }
  return null
}
