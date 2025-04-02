import { Input as AriaInput, InputProps } from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './TextField.module.css'
import { useContextProps, InputContext } from 'react-aria-components'
import { PasswordField } from './PasswordField'

export type { InputProps }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, InputContext)

    return (
      <div className={styles.wrap}>
        <AriaInput
          {...props}
          ref={ref}
          className={clsx(styles.input, props.className)}
        />
        {props.type === 'password' && <PasswordField {...props} />}
      </div>
    )
  },
)
