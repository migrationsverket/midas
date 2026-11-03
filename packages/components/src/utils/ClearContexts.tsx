'use client'

import type { Context, ReactNode } from 'react'
import { ButtonContext } from '../button/ButtonContext'
import { CheckboxContext } from '../checkbox/CheckboxContext'
import { CheckboxGroupContext } from '../checkbox/CheckboxGroupContext'
import { ComboBoxContext } from '../combobox/ComboBoxContext'
import { DateFieldContext } from '../date-field/DateFieldContext'
import { DatePickerContext } from '../date-picker/DatePickerContext'
import { DateRangePickerContext } from '../date-picker/DateRangePickerContext'
import { HeadingContext } from '../heading/HeadingContext'
import { LinkContext } from '../link/LinkContext'
import { LinkButtonContext } from '../link-button/LinkButtonContext'
import { RadioContext } from '../radio/RadioContext'
import { RadioGroupContext } from '../radio/RadioGroupContext'
import { SearchFieldContext } from '../search-field/SearchFieldContext'
import { SelectContext } from '../select/SelectContext'
import { TextContext } from '../text/TextContext'
import { TextFieldContext } from '../textfield/TextFieldContext'
import { TimeFieldContext } from '../time-field/TimeFieldContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const contexts: Context<any>[] = [
  ButtonContext,
  CheckboxContext,
  CheckboxGroupContext,
  ComboBoxContext,
  DateFieldContext,
  DatePickerContext,
  DateRangePickerContext,
  HeadingContext,
  LinkContext,
  LinkButtonContext,
  RadioContext,
  RadioGroupContext,
  SearchFieldContext,
  SelectContext,
  TextContext,
  TextFieldContext,
  TimeFieldContext,
]

/**
 * Stops the Midas component contexts from reaching the children. Components
 * wrap the parts they render themselves in it, e.g. a field's label and
 * description, so that the defaults a consumer provides only apply to the
 * components the consumer renders.
 */
export const ClearContexts = ({ children }: { children?: ReactNode }) =>
  contexts.reduceRight<ReactNode>(
    (content, { Provider }) => <Provider value={null}>{content}</Provider>,
    children,
  )
