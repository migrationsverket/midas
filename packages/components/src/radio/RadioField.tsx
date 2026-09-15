import {
  RadioFieldProps as AriaRadioFieldProps,
  RadioField as AriaRadioField,
} from 'react-aria-components'

export type RadioFieldProps = AriaRadioFieldProps

export const RadioField = (props: RadioFieldProps) => (
  <AriaRadioField {...props} />
)
