import { ReactNode } from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'

export interface GridItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode
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
export const GridItem: React.FC<GridItemProps> = ({
  children,
  col,
  ...rest
}) => {
  // Convert numeric values to string if necessary
  const colClass = col ? `col-${col}` : ''

  return (
    <div
      className={clsx(styles.col, styles[colClass], rest.className)}
      {...rest}
    >
      {children}
    </div>
  )
}