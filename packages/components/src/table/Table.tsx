'use client'

import styles from './Table.module.css'

import type {
  RowProps,
  TableHeaderProps,
  ColumnProps,
  TableProps as AriaTableProps,
  CellProps,
  TableBodyProps,
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
  TableBody as AriaTableBody,
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
  
  /** Row height (large: 48px, medium: 40px)
   *  @default 'large'
   * */
  size?: Size
  /**
   * Alternating colors for rows
   */
  striped?: boolean
}

export const Table = ({
  size = 'large',
  striped = false,
  className,
  ...rest
}: TableProps) => (
  <AriaTable
    className={clsx(styles.table, className, {
      [styles.medium]: size === 'medium',
      [styles.striped]: striped,
    })}
    {...rest}
  />
)

export const TableHeader = <T extends object>({
  columns,
  children,
  className,
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

  return (
    <AriaTableHeader className={clsx(className, styles.tableHeader)}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column width={50}>
          {selectionMode === 'multiple' && (
            <Checkbox
              className={styles.selection}
              slot='selection'
            />
          )}
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
  className,
  ...rest
}: RowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions()

  return (
    <AriaRow
      id={id}
      className={clsx(className, styles.row)}
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
          <Checkbox
            className={styles.selection}
            slot='selection'
          />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  )
}

export const Column = ({ children, className, ...rest }: ColumnProps) => {
  return (
    <AriaColumn
      className={clsx(className, styles.column)}
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

export const Cell = ({ className, ...rest }: CellProps) => {
  return (
    <AriaCell
      className={clsx(className, styles.cell)}
      {...rest}
    />
  )
}

export const TableBody = <T extends object>({
  className,
  ...rest
}: TableBodyProps<T>) => {
  return (
    <AriaTableBody
      className={clsx(className, styles.tableBody)}
      {...rest}
    />
  )
}
