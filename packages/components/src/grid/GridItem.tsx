import * as React from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'
import { ColumnSize, OffsetSize } from '../common/types'

export interface GridItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  /** Column size and behaviour
   * @deprecated since v10.2.0 Use `size` prop instead.
   */
  col?: ColumnSize
  /** Column size and behaviour across different breakpoints   */
  size?:
    | ColumnSize
    | {
        xs?: ColumnSize
        sm?: ColumnSize
        md?: ColumnSize
        lg?: ColumnSize
        xl?: ColumnSize
      }
  /** Additional spacing between columns */
  offset?:
    | OffsetSize
    | {
        xs?: OffsetSize
        sm?: OffsetSize
        md?: OffsetSize
        lg?: OffsetSize
        xl?: OffsetSize
      }
}

/**
 * Columns based on display: flex;
 * GridItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */

export const GridItem: React.FC<GridItemProps> = ({
  children,
  col,
  size,
  offset,
  ...props
}) => {
  const colClass = col ? `col-${col}` : ''
  const offsetClass = offset ? `offset-${offset}` : ''

  const sizeClasses = getSizeClasses(size)
  const offsetClasses = getOffsetClasses(offset)

  return (
    <div
      {...props}
      className={clsx(
        styles.col,
        styles[colClass],
        styles[offsetClass],
        sizeClasses.map(cls => styles[cls]),
        offsetClasses.map(cls => styles[cls]),
        props.className,
      )}
    >
      {children}
    </div>
  )
}

const getSizeClasses = (size?: GridItemProps['size']): string[] => {
  if (!size) return []
  if (typeof size === 'object') {
    return Object.entries(size).map(([breakpoint, value]) =>
      breakpoint === 'xs' ? `col-${value}` : `col-${breakpoint}-${value}`,
    )
  }
  return [`col-${size}`]
}

const getOffsetClasses = (offset?: GridItemProps['offset']): string[] => {
  if (!offset) return []
  if (typeof offset === 'object') {
    return Object.entries(offset).map(([breakpoint, value]) =>
      breakpoint === 'xs' ? `offset-${value}` : `offset-${breakpoint}-${value}`,
    )
  }
  return [`offset-${offset}`]
}
