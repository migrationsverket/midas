import { ReactNode } from 'react'
import styles from './Flex.module.css'
import clsx from 'clsx'

export interface FlexItemProps
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
      className={clsx(
        styles.col,
        styles[colClass],
        styles[offsetClass],
        props.className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
