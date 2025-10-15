import { SelectValueRenderProps } from 'react-aria-components'
import { X } from 'lucide-react'
import { useLocalizedStringFormatter } from '../utils/intl'
import { type RacSelectProps } from './RacSelect'
import messages from './intl/translations.json'
import styles from './RacSelect.module.css'
import React from 'react'
import useObserveElement from '../utils/useObserveElement'

interface SelectValueTagProps<
  T extends object,
  M extends 'single' | 'multiple' = 'single',
> extends SelectValueRenderProps<T>,
    Pick<RacSelectProps<T, M>, 'isDisabled' | 'isClearable'> {
  triggerRef: React.RefObject<HTMLButtonElement>
  defaultChildren: React.ReactNode | undefined
}

export const SelectValueTag = <
  T extends object,
  M extends 'single' | 'multiple' = 'single',
>({
  isClearable = true,
  isDisabled,
  selectedItems,
  selectedText,
  triggerRef,
  state,
}: SelectValueTagProps<T, M>) => {
  const strings = useLocalizedStringFormatter(messages)

  const { width: triggerWidth } = useObserveElement(triggerRef.current, {
    includePadding: true,
  })

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
      <span
        className={styles.truncate}
        style={{ maxWidth: triggerWidth - 92 }}
      >
        {formatString()}
      </span>
      {isClearable && (
        <button
          aria-label={strings.format('clearAll')}
          className={styles.clearButton}
          disabled={isDisabled}
          onClick={() => {
            state.selectionManager.clearSelection()
            triggerRef?.current?.focus()
          }}
        >
          <X
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  )
}
