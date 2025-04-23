'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextField.module.css'

export interface TextAreaProps
  extends Omit<TextFieldBaseProps, 'children' | 'type'> {
  inputProps?: AriaTextAreaProps
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ inputProps, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <AriaTextArea
        {...inputProps}
        className={clsx(styles.textArea, inputProps?.className)}
        ref={ref}
      />
    </TextFieldBase>
  ),
)
