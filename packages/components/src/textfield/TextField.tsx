'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from '../utils/clsx'
import { Complement } from '../utils/types'

export interface TextFieldProps
  extends TextFieldBaseProps,
    Complement<TextFieldBaseProps, InputProps> {
  ref?: React.Ref<HTMLInputElement>
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  form,
  list,
  min,
  max,
  ref,
  type,
  ...rest
}) => (
  <TextFieldBase {...rest}>
    <Input
      className={clsx(className)}
      form={form}
      list={list}
      min={min}
      max={max}
      ref={ref}
      type={type}
      skipContext
    />
  </TextFieldBase>
)
