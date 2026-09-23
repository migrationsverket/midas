'use client'

import { forwardRef } from 'react'
import {
  CheckboxButtonProps as AriaCheckboxButtonProps,
  CheckboxButton as AriaCheckboxButton,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './Checkbox.module.css'

export type CheckboxButtonProps = AriaCheckboxButtonProps

export const CheckboxButton = forwardRef<HTMLLabelElement, CheckboxButtonProps>(
  ({ className, ...rest }, ref) => (
    <AriaCheckboxButton
      className={clsx(styles.checkboxButton, className)}
      ref={ref}
      {...rest}
    />
  ),
)
