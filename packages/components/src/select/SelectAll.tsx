import React from 'react'
import { SelectStateContext } from 'react-aria-components'
import { Checkbox } from '../checkbox'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './Select.module.css'

export const SelectAll = () => {
  const state = React.useContext(SelectStateContext)

  const strings = useLocalizedStringFormatter(messages)

  const handleChange = () => {
    if (!state) return

    // `collection.getKeys()` returns every node (sections, headers, items),
    // so it's filtered down to selectable items — same rule react-stately's
    // own (private) getSelectAllKeys() uses internally.
    const selectableKeys = Array.from(state.collection.getKeys()).filter(
      key =>
        state.collection.getItem(key)?.type === 'item' &&
        state.selectionManager.canSelectItem(key),
    )

    state.setValue(state.selectionManager.isSelectAll ? null : selectableKeys)
    state.commitValidation()
  }

  return (
    <Checkbox
      className={styles.selectAll}
      isIndeterminate={
        !state?.selectionManager.isSelectAll && !state?.selectionManager.isEmpty
      }
      isSelected={state?.selectionManager.isSelectAll}
      onChange={handleChange}
    >
      {strings.format('selectAll')}
    </Checkbox>
  )
}
