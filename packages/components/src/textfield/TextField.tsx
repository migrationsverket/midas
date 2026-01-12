'use client'

import type { Ref } from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from '../utils/clsx'
import { Complement } from '../utils/types'

export interface TextFieldProps
  extends TextFieldBaseProps,
    Complement<TextFieldBaseProps, InputProps> {
  ref?: Ref<HTMLInputElement>
}

export const TextField = ({
  className,
  form,
  list,
  min,
  max,
  ref,
  type,
  ...rest
}: TextFieldProps) => {
  return (
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
}
