import * as React from 'react'
import {
  FieldErrorContext,
  FieldError as AriaFieldError,
  type FieldErrorProps as AriaFieldErrorProps,
} from 'react-aria-components'
import clsx from 'clsx'
import { Text } from '../text'
import styles from './FieldError.module.css'

export interface FieldErrorProps extends AriaFieldErrorProps {
  isInvalid?: boolean
}

export const FieldError = React.forwardRef(
  (props: FieldErrorProps, ref: React.ForwardedRef<HTMLElement>) => {
    const { children, isInvalid } = props
    const className = clsx(styles.fieldError, props.className)
    const context = React.useContext(FieldErrorContext)

    if (!context && isInvalid && typeof children !== 'function') {
      return <Text className={className}>{children}</Text>
    }

    if (!context?.isInvalid) return null

    return (
      <AriaFieldError
        {...props}
        ref={ref}
        className={className}
      />
    )
  },
)
