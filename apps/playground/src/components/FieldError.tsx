import {
  FieldError as AriaFieldError,
  FieldErrorProps
} from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './fieldError.module.css'

export const FieldError = React.forwardRef(
  (props: FieldErrorProps, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <AriaFieldError
        {...props}
        ref={ref}
        className={clsx(styles.fieldError, props.className)}
      />
    )
  },
)
