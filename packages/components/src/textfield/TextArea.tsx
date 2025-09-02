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
  extends Omit<TextFieldBaseProps, 'children' | 'type' | 'pattern' | 'ref'> {
  className?: AriaTextAreaProps['className']
  form?: string
  ref?: React.RefObject<HTMLTextAreaElement | null>
  rows?: number
  wrap?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  form,
  rows,
  wrap,
  ref,
  ...rest
}) => (
  <TextFieldBase {...rest}>
    <AriaTextArea
      className={clsx(styles.textArea, className)}
      form={form}
      ref={ref}
      rows={rows}
      wrap={wrap}
    />
  </TextFieldBase>
)
