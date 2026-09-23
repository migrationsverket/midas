import {
  RadioButtonProps as AriaRadioButtonProps,
  RadioButton as AriaRadioButton,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './Radio.module.css'

export type RadioButtonProps = AriaRadioButtonProps

export const RadioButton = ({ className, ...rest }: RadioButtonProps) => (
  <AriaRadioButton
    className={clsx(styles.radioButton, className)}
    {...rest}
  />
)
