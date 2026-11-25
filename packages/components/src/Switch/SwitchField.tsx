'use client'

import {
  SwitchFieldProps as AriaSwitchFieldProps,
  SwitchField as AriaSwitchField,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Switch.module.css'

export type SwitchFieldProps = AriaSwitchFieldProps

export const SwitchField = ({ className, ...rest }: SwitchFieldProps) => (
  <AriaSwitchField
    className={clsx(styles.SwitchField, className)}
    {...rest}
  />
)
