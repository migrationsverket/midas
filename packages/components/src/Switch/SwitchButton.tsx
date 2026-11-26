'use client'

import { forwardRef } from 'react'
import {
  SwitchButtonProps as AriaSwitchButtonProps,
  SwitchButton as AriaSwitchButton,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Switch.module.css'

export type SwitchButtonProps = AriaSwitchButtonProps

export const SwitchButton = forwardRef<HTMLLabelElement, SwitchButtonProps>(
  ({ className, ...rest }, ref) => (
    <AriaSwitchButton
      className={clsx(styles.SwitchButton, className)}
      ref={ref}
      {...rest}
    />
  ),
)
