'use client'

import type { Ref } from 'react'
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
  ref?: Ref<HTMLTextAreaElement>
}

export const TextArea = ({
  className,
  form,
  rows,
  wrap,
  ref,
  ...rest
}: TextAreaProps) => {
  return (
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
}
