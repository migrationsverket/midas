import * as React from 'react'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { Text } from '../text'
import styles from './TextField.module.css'
import { Button } from '../button'
import { InputProps } from './Input'

export const PasswordField: React.FC<InputProps> = ({ value }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handlePress = () => setShowPassword(previousValue => !previousValue)
  const stringFormatter = useLocalizedStringFormatter(messages)

  return (
    <>
      {showPassword && (
        <Text
          slot='description'
          className={styles.passwordText}
        >
          {value}
        </Text>
      )}
      <Button
        variant='tertiary'
        onPress={handlePress}
        className={styles.passwordButton}
      >
        {showPassword
          ? stringFormatter.format('hide')
          : stringFormatter.format('show')}
      </Button>
    </>
  )
}
