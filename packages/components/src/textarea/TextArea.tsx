'use client'

import * as React from 'react'
import {
  TextArea as AriaTextArea,
  TextAreaProps,
  useContextProps,
  TextAreaContext,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextArea.module.css'

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    ;[props, ref] = useContextProps(props, ref, TextAreaContext)

    return (
      <AriaTextArea
        {...props}
        ref={ref}
        className={clsx(styles.textArea, props.className)}
      />
    )
  },
)
