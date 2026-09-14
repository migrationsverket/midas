import {
  RadioFieldProps as AriaRadioFieldProps,
  RadioField as AriaRadioField,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Radio.module.css'

export type RadioFieldProps = AriaRadioFieldProps

export const RadioField = ({ className, ...rest }: RadioFieldProps) => (
  <AriaRadioField
    className={clsx(styles.radioField, className)}
    {...rest}
  />
)
