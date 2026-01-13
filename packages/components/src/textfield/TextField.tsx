'use client'

import { forwardRef } from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input, type InputProps } from './Input'
import clsx from '../utils/clsx'
import { Complement } from '../utils/types'

export type TextFieldProps = TextFieldBaseProps &
  Complement<TextFieldBaseProps, InputProps>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, list, type, min, max, form, ...rest }, ref) => (
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
  ),
)
TextField.displayName = 'TextField'
