import {
  Label as AriaLabel,
  Text as AriaText,
  LabelProps, TextProps
} from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './label.module.css'

export const Label = React.forwardRef(
  (props: LabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    return (
      <AriaLabel
        {...props}
        ref={ref}
        className={clsx(styles.label, props.className)}
      />
    )
  },
)

export const Text = React.forwardRef(
  (props: TextProps, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <AriaText
        {...props}
        ref={ref}
        className={clsx(styles.label, props.className)}
      />
    )
  },
)
