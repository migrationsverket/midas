'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { TextArea as AriaTextArea } from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextField.module.css'

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  TextFieldBaseProps
>(({ className, ...props }, ref) => (
  <TextFieldBase {...props}>
    <AriaTextArea
      className={clsx(styles.textArea, className)}
      ref={ref}
    />
  </TextFieldBase>
))
