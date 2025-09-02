'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './TextField.module.css'
import { Complement } from '../utils/types'

export interface TextAreaProps
  extends Omit<TextFieldBaseProps, 'type' | 'pattern'>,
    Complement<TextFieldBaseProps, AriaTextAreaProps> {
  ref?: React.RefObject<HTMLTextAreaElement>
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
