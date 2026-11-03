import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './TextField.module.css'
import { Button } from '../button'
import { ClearContexts } from '../utils/ClearContexts'

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
    <ClearContexts>
      <Button
        aria-label={strings.format('showPassword')}
        aria-pressed={showPassword}
        variant='tertiary'
        onPress={onToggle}
        className={styles.passwordButton}
      >
        {showPassword ? strings.format('hide') : strings.format('show')}
      </Button>
    </ClearContexts>
  )
}
