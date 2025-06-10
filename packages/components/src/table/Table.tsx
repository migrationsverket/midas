'use client'

import styles from './Table.module.css'

import type {
  RowProps,
  TableHeaderProps,
  ColumnProps,
  TableProps as AriaTableProps,
  CellProps,
} from 'react-aria-components'

import {
  Collection,
  TableHeader as AriaTableHeader,
  useTableOptions,
  Column as AriaColumn,
  Row as AriaRow,
  Cell as AriaCell,
  Button,
  Table as AriaTable,
  TableBody,
} from 'react-aria-components'
import { Checkbox } from '../checkbox'
import {
  ArrowDownNarrowWide,
  ArrowUpWideNarrow,
  GripVertical,
} from 'lucide-react'
import clsx from 'clsx'
import { Size } from '../common/types'

export interface TableProps extends AriaTableProps {
  /**
   *  A more compact version of the table
   *  @deprecated since v10.1.1, please use the `size` prop instead.
   */
  narrow?: boolean
  /** Row and column height (large: 48px, medium: 40px)
   *  @default 'large'
   * */
  size?: Size
  /**
   * Alternating colors for rows
   */
  striped?: boolean
}

export const Table = ({
  narrow,
  size,
  striped,
  className,
  ...rest
}: TableProps) => {
  const classNames = clsx(
    styles.table,
    narrow && styles.narrow,
    size === 'medium' && styles.medium,
    striped && styles.striped,
    className,
  )

  return (
    <AriaTable
      className={classNames}
      {...rest}
    />
  )
}

export const TableHeader = <T extends object>({
  columns,
  children,
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <AriaTableHeader className={styles.tableHeader}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column width={50}>
          {selectionMode === 'multiple' && <Checkbox slot='selection' />}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableHeader>
  )
}

export const Row = <T extends object>({
  id,
  columns,
  children,
  ...rest
}: RowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <AriaRow
      id={id}
      className={clsx(styles.row)}
      {...rest}
    >
      {allowsDragging && (
        <Cell>
          <Button slot='drag'>
            <GripVertical size={20} />
          </Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <Checkbox slot='selection' />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  )
}

export const Column = ({ children, ...rest }: ColumnProps) => {
  return (
    <AriaColumn
      className={styles.column}
      {...rest}
    >
      {({ allowsSorting, sortDirection }) => (
        <>
          {children}
          {allowsSorting && (
            <span
              aria-hidden='true'
              className='sort-indicator'
            >
              {sortDirection === 'ascending' ? (
                <ArrowUpWideNarrow size={20} />
              ) : (
                <ArrowDownNarrowWide size={20} />
              )}
            </span>
          )}
        </>
      )}
    </AriaColumn>
  )
}

export const Cell = ({ ...rest }: CellProps) => {
  return (
    <AriaCell
      className={styles.cell}
      {...rest}
    />
  )
}

export { TableBody }
