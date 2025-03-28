'use client'

import * as React from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import { Input } from '../input'
import clsx from 'clsx'

export const TextField: React.FC<TextFieldBaseProps> = ({
  className,
  ...props
}) => (
  <TextFieldBase {...props}>
    <Input className={clsx(className)} />
  </TextFieldBase>
)
