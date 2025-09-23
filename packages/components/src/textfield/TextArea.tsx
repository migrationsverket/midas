'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextField.module.css'

export type TextAreaProps = Omit<TextFieldBaseProps, 'type' | 'pattern'> &
  AriaTextAreaProps

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, cols, rows, wrap, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <AriaTextArea
        className={clsx(styles.textArea, className)}
        cols={cols}
        ref={ref}
        rows={rows}
        wrap={wrap}
      />
    </TextFieldBase>
  ),
)
