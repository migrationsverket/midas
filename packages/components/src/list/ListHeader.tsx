'use client'

import React from 'react'
import { Checkbox } from '../checkbox'
import clsx from '../utils/clsx'
import styles from './List.module.css'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface ListHeaderProps {
  /** The heading label displayed on the left side of the header. */
  label: string
  /** Optional content rendered on the right side of the header. */
  children?: React.ReactNode
  /** Renders a select-all checkbox to the left of the label. */
  showSelectAll?: boolean
  /** Whether the select-all checkbox is checked. */
  isSelectAllSelected?: boolean
  /** Whether the select-all checkbox is in an indeterminate state. */
  isSelectAllIndeterminate?: boolean
  /** Called when the select-all checkbox changes. */
  onSelectAllChange?: (isSelected: boolean) => void
  /**
   * Accessible name for the select-all checkbox.
   * @default 'Markera alla'
   */
  selectAllLabel?: string
  className?: string
}

export const ListHeader = ({
  label,
  children,
  showSelectAll = false,
  isSelectAllSelected = false,
  isSelectAllIndeterminate = false,
  onSelectAllChange,
  selectAllLabel,
  className,
}: ListHeaderProps) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <div className={clsx(styles.listHeader, className)}>
      <div className={styles.listHeaderStart}>
        {showSelectAll && (
          <Checkbox
            aria-label={selectAllLabel ?? strings.format('selectAll')}
            isSelected={isSelectAllSelected}
            isIndeterminate={isSelectAllIndeterminate}
            onChange={onSelectAllChange}
          />
        )}
        <span className={styles.listHeaderLabel}>{label}</span>
      </div>
      {children}
    </div>
  )
}
