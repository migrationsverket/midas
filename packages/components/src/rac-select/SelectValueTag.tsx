import {
  SelectValueRenderProps,
  SelectStateContext,
  Button,
} from 'react-aria-components'
import { useFocusManager } from 'react-aria'
import { X } from 'lucide-react'
import { useLocalizedStringFormatter } from '../utils/intl'
import { type RacSelectProps } from './RacSelect'
import messages from './intl/translations.json'
import React from 'react'
import { SelectionMode } from '../rac-select'
import styles from './RacSelect.module.css'

type SelectValueTagProps<
  T extends object,
  M extends SelectionMode = 'single',
> = SelectValueRenderProps<T> & Pick<RacSelectProps<T, M>, 'isDisabled'>

export const SelectValueTag = <
  T extends object,
  M extends SelectionMode = 'single',
>({
  isDisabled,
  selectedItems,
  selectedText,
}: SelectValueTagProps<T, M>) => {
  const strings = useLocalizedStringFormatter(messages)

  const formatString = () => {
    if (selectedItems.length === 1) {
      return selectedText
    }

    return `${selectedItems.length} ${strings.format('selected')}`
  }

  return (
    <div
      className={styles.selectValueTag}
      data-disabled={isDisabled || undefined}
    >
      <span className={styles.truncate}>{formatString()}</span>
      <SelectClearButton />
    </div>
  )
}

const SelectClearButton = () => {
  const state = React.useContext(SelectStateContext)

  const strings = useLocalizedStringFormatter(messages)

  const focusManager = useFocusManager()

  const handlePress = () => {
    focusManager?.focusFirst()
    state?.setValue(null)
  }

  return (
    <Button
      aria-label={strings.format('clearAll')}
      className={styles.clearButton}
      onPress={handlePress}
      slot={null}
    >
      <X
        width={20}
        height={20}
      />
    </Button>
  )
}
