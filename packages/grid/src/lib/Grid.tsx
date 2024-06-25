import { ReactNode } from 'react'
import styles from './Grid.module.css'

export interface GridProps {
  /** Använd "grid-column: span $antalKollumner';" för att låta en child växa över fler kolumner. */
  children: ReactNode
}

/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}
