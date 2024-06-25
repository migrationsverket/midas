import { ReactNode } from 'react'
import styles from './Flex.module.css'

export interface FlexProps {
  children: ReactNode
}

/**
 * Grid baserat på display: flex;
 * Använder en uträkning i flex för att få rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Utan ytterligare flex-regler lägger sig childs efter 12 kolumner men 1 i mobilt läge.
 * Använd komponenten FlexItem för att hantera objekt i olika kolumner.
 * FlexItem accepterar värden från 1 - 12 och auto.
 * Dessa räknas sedan ut beroende på bestämmelser kring kolumner i olika breakpoints.
 */

export const Flex: React.FC<FlexProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>{children}</div>
    </div>
  )
}
