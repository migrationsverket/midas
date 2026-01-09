import { useState } from 'react'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { Text } from '../text'
import styles from './TextField.module.css'
import { Button } from '../button'
import { InputProps } from './Input'
import { InputContext, useContextProps } from 'react-aria-components'

export const PasswordField = ({ ref, ...props }: InputProps) => {
  ;[props, ref] = useContextProps(props, ref, InputContext)
  const [showPassword, setShowPassword] = useState(false)
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
