import { Button } from 'react-aria-components'
import { X } from 'lucide-react'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './TreeComboBox.module.css'

export interface TreeComboBoxValueProps {
  checkedCount: number
  isDisabled?: boolean
  onClear: () => void
}

/**
 * A non-interactive "N selected" pill absolutely positioned over the input,
 * mirroring `select/MultiSelectValue.tsx`. CSS (not JS state) hides it
 * whenever the input is focused or has typed text — see
 * `.inputField[data-focused] ~ .summaryPill` /
 * `.inputField:not(:placeholder-shown) ~ .summaryPill` in
 * `TreeComboBox.module.css`, so it never fights with the filter query.
 */
export const TreeComboBoxValue = ({
  checkedCount,
  isDisabled,
  onClear,
}: TreeComboBoxValueProps) => {
  const strings = useLocalizedStringFormatter(messages)

  if (checkedCount === 0) {
    return null
  }

  return (
    <div
      className={styles.summaryPill}
      data-disabled={isDisabled || undefined}
    >
      <span className={styles.truncate}>
        {checkedCount} {strings.format('selected')}
      </span>
      <Button
        aria-label={strings.format('clearAll')}
        className={styles.clearButton}
        onPress={onClear}
        isDisabled={isDisabled}
        slot={null}
      >
        <X
          width={16}
          height={16}
        />
      </Button>
    </div>
  )
}
