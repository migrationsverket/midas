import * as React from 'react'
import styles from './Flex.module.css'
import clsx from 'clsx'

export interface FlexItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  /** Column size and behaviour */
  col?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'auto'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
  /** Additional spacing between columns */
  offset?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
}

/**
 * Columns based on display: flex;
 * FlexItem accepts values of 1 through 12 and auto.
 *
 * @see {@link: https://migrationsverket.se/components/flex}
 */

export const FlexItem: React.FC<FlexItemProps> = ({
  children,
  col,
  offset,
  ...props
}) => {
  const colClass = col ? `col-${col}` : ''
  const offsetClass = offset ? `offset-${offset}` : ''

  return (
    <div
      {...props}
      className={clsx(
        styles.col,
        styles[colClass],
        styles[offsetClass],
        props.className,
      )}
    >
      {children}
    </div>
  )
}
