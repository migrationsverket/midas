import {
  FieldError as AriaFieldError,
  FieldErrorProps,
} from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './FieldError.module.css'
import { FieldErrorContext } from 'react-aria-components'

export const FieldError = React.forwardRef(
  (props: FieldErrorProps, ref: React.ForwardedRef<HTMLElement>) => {
    const validation = React.useContext(FieldErrorContext)

    if (!validation?.isInvalid) return null

    return (
      <AriaFieldError
        {...props}
        ref={ref}
        className={clsx(styles.fieldError, props.className)}
      />
    )
  },
)
