import { RadioFieldProps } from 'react-aria-components'
import { RadioField } from './RadioField'
import { RadioButton } from './RadioButton'

export type RadioProps = RadioFieldProps

export const Radio = ({ children, ...rest }: RadioProps) => (
  <RadioField {...rest}>
    <RadioButton>{children}</RadioButton>
  </RadioField>
)
