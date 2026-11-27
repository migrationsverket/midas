'use client'

import { forwardRef, type CSSProperties } from 'react'
import { TextFieldBase, type TextFieldBaseProps } from './TextFieldBase'
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './TextField.module.css'
import { Complement } from '../utils/types'

export type TextAreaProps = Omit<TextFieldBaseProps, 'type' | 'pattern'> &
  Complement<TextFieldBaseProps, AriaTextAreaProps>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, cols, form, rows, wrap, ...rest }, ref) => (
    <TextFieldBase {...rest}>
      <AriaTextArea
        className={clsx(styles.textArea, className)}
        cols={cols}
        form={form}
        ref={ref}
        rows={rows}
        // With field-sizing on touch screens rows no longer sets the height,
        // so the CSS uses it as the minimum instead
        style={
          rows
            ? ({ '--midas-textarea-rows': rows } as CSSProperties)
            : undefined
        }
        wrap={wrap}
      />
    </TextFieldBase>
  ),
)
TextArea.displayName = 'TextArea'
