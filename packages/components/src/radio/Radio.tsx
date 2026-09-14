import { RadioFieldProps } from 'react-aria-components'
import { RadioField } from './RadioField'
import { RadioButton } from './RadioButton'
import { Text } from '../text'

export interface RadioProps extends RadioFieldProps {
  description?: string
}

export const Radio = ({ children, description, ...rest }: RadioProps) => (
  <RadioField {...rest}>
    <RadioButton>{children}</RadioButton>
    {description && <Text slot='description'>{description}</Text>}
  </RadioField>
)
