'use client'

import * as React from 'react'
import {
  TextField as AriaTextField,
  TextFieldProps,
  useContextProps,
  TextFieldContext,
} from 'react-aria-components'
import styles from './TextField.module.css'
import clsx from 'clsx'

export type { TextFieldProps }

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, TextFieldContext)

    const [value, setValue] = React.useState(
      props.defaultValue ?? props.value ?? '',
    )

    const handleChange: TextFieldProps['onChange'] = value => {
      setValue(value)
    }

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = event => {
      setValue(event.target.value)
    }

    return (
      <AriaTextField
        {...props}
        className={clsx(styles.inputField, props.className)}
        onChange={handleChange}
        onFocus={handleFocus}
        value={value}
      >
        {props.children}
      </AriaTextField>
    )
  },
)
