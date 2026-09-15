'use client'

import {
  CheckboxFieldProps as AriaCheckboxFieldProps,
  CheckboxField as AriaCheckboxField,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Checkbox.module.css'

export type CheckboxFieldProps = AriaCheckboxFieldProps

export const CheckboxField = ({ className, ...rest }: CheckboxFieldProps) => (
  <AriaCheckboxField
    className={clsx(className, styles.checkboxField)}
    {...rest}
  />
)
