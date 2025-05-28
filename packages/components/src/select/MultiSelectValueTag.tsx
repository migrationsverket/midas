import * as React from 'react'
import { X } from 'lucide-react'
import { MultiSelectState } from './useMultiSelectState'
import type { Option, SelectProps } from './Select'
import styles from './Select.module.css'

interface MultiSelectValueTagProps extends SelectProps {
  state: MultiSelectState<Option>
  parentWidth: number
  onClear: () => void
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
}

export const MultiSelectValueTag: React.FC<MultiSelectValueTagProps> = ({
  state: { selectedItems: items },
  isDisabled,
  parentWidth,
  onClear,
  triggerRef,
  isClearable,
}) => (
  <div
    className={styles.selectValueTag}
    data-disabled={isDisabled || undefined}
  >
    <span
      className={styles.truncate}
      style={{ maxWidth: parentWidth - 92 }}
    >
      {items?.length && items.length > 1
        ? `${items.length} valda`
        : items?.[0].textValue}
    </span>
    {isClearable && (
      <button
        disabled={isDisabled}
        aria-label='Rensa alla'
        className={styles.clearButton}
        onClick={() => {
          onClear()
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
