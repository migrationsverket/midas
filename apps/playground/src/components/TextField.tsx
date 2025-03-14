import type {AriaTextFieldProps} from 'react-aria';
import React from 'react'
import { TextField as AriaTextField } from 'react-aria-components'
import clsx from 'clsx'
import styles from './textField.module.css'

export const TextField = React.forwardRef(
  (props: AriaTextFieldProps & {children: React.ReactNode}, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <AriaTextField
        {...props}
        ref={ref}
        className={clsx(styles.textField)}
      >
        {props.children}
      </AriaTextField>
    )
  },
)
