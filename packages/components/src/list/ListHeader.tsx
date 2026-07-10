'use client'

import React from 'react'
import { Checkbox } from '../checkbox'
import clsx from '../utils/clsx'
import styles from './List.module.css'

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
  className?: string
}

export const ListHeader = ({
  label,
  children,
  showSelectAll = false,
  isSelectAllSelected = false,
  isSelectAllIndeterminate = false,
  onSelectAllChange,
  className,
}: ListHeaderProps) => {
  return (
    <div className={clsx(styles.listHeader, className)}>
      <div className={styles.listHeaderStart}>
        {showSelectAll && (
          <Checkbox
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
