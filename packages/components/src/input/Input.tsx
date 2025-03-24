import { Input as AriaInput, InputProps } from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'
import { useContextProps, InputContext } from 'react-aria-components'

export const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    ;[props, ref] = useContextProps(props, ref, InputContext)
    return (
      <AriaInput
        {...props}
        ref={ref}
       className={clsx(styles.input, props.className)}
      />
    )
  },
)

