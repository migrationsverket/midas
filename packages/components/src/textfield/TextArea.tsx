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
  extends Omit<TextFieldBaseProps, 'children' | 'type' | 'pattern'> {
  className?: AriaTextAreaProps['className']
  dir?: string
  dirName?: string
  form?: string
  rows?: number
  wrap?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, dir, dirName, form, rows, wrap, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <AriaTextArea
        className={clsx(styles.textArea, className)}
        dir={dir}
        dirName={dirName}
        form={form}
        ref={ref}
        rows={rows}
        wrap={wrap}
      />
    </TextFieldBase>
  ),
)
