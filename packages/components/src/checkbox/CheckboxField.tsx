'use client'

import {
  CheckboxFieldProps as AriaCheckboxFieldProps,
  CheckboxField as AriaCheckboxField,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './Checkbox.module.css'

export type CheckboxFieldProps = AriaCheckboxFieldProps

export const CheckboxField = ({ className, ...rest }: CheckboxFieldProps) => (
  <AriaCheckboxField
    className={clsx(styles.checkboxField, className)}
    {...rest}
  />
)
