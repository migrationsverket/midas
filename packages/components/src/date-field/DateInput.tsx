import * as React from 'react'
import {
  DateInput as AriaDateInput,
  type DateInputProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './DateInput.module.css'

export type { DateInputProps }

export const DateInput: React.FC<DateInputProps> = ({ className, ...rest }) => (
  <AriaDateInput
    className={clsx(styles.dateInput, className)}
    {...rest}
  />
)
