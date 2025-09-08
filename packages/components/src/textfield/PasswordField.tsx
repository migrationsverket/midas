import * as React from 'react'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { Text } from '../text'
import styles from './TextField.module.css'
import { Button } from '../button'
import { InputProps } from './Input'
import { InputContext, useContextProps } from 'react-aria-components'

export interface PasswordFieldProps extends InputProps {
  ref?: React.Ref<HTMLInputElement>
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  ref,
  ...props
}) => {
  ;[props, ref] = useContextProps(props, ref, InputContext)
  const [showPassword, setShowPassword] = React.useState(false)
  const handlePress = () => setShowPassword(previousValue => !previousValue)
  const strings = useLocalizedStringFormatter(messages)

  return (
    <>
      {showPassword && (
        <Text
          slot='description'
          className={styles.passwordText}
        >
          {props.value}
        </Text>
      )}
      <Button
        variant='tertiary'
        onPress={handlePress}
        className={styles.passwordButton}
      >
        {showPassword ? strings.format('hide') : strings.format('show')}
      </Button>
    </>
  )
}
