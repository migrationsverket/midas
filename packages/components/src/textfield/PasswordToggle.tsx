import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './TextField.module.css'
import { Button } from '../button'

interface PasswordToggleProps {
  showPassword: boolean
  onToggle: () => void
}

export const PasswordToggle = ({
  showPassword,
  onToggle,
}: PasswordToggleProps) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <Button
      variant='tertiary'
      onPress={onToggle}
      className={styles.passwordButton}
    >
      {showPassword ? strings.format('hide') : strings.format('show')}
    </Button>
  )
}
