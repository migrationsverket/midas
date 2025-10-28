import React from 'react'
import { SelectStateContext } from 'react-aria-components'
import { Checkbox } from '../checkbox'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './Select.module.css'

export const SelectAll = () => {
  const state = React.useContext(SelectStateContext)

  const strings = useLocalizedStringFormatter(messages)

  const handleChange = () =>
    state?.setValue(
      state?.selectionManager.isSelectAll
        ? null
        : Array.from(state.collection.getKeys()),
    )

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
