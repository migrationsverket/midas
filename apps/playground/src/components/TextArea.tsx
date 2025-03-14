import { TextArea as AriaTextField, TextAreaProps } from 'react-aria-components'
import * as React from 'react'
import clsx from 'clsx'
import styles from './textArea.module.css'
import { useContextProps, TextAreaContext } from 'react-aria-components'

export const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    ;[props, ref] = useContextProps(props, ref, TextAreaContext)
    return (
      <AriaTextField
        {...props}
        ref={ref}
        className={clsx(styles.textArea, props.className)}
      />
    )
  },
)
