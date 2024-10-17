import { ReactNode } from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'

interface GridProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode
  /** Tar bort alla marginaler för nestad användning */
  fluid?: boolean
}

/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */

export const Grid: React.FC<GridProps> = ({ children, fluid, ...rest }) => {
  return (
    <div
      className={clsx(styles.container, fluid && styles.fluid, rest.className)}
      {...rest}
    >
      <div className={styles.grid}>{children}</div>
    </div>
  )
}
