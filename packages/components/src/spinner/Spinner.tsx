import styles from './Spinner.module.css'
import { LoaderCircle } from 'lucide-react'
import clsx from 'clsx'

export interface SpinnerProps {
  /** Displays a smaller spinner when set to true
   * @default false
   */
  small?: boolean
  /** For use on coloured background
   * @default false
   */
  isOnColor?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  isOnColor = false,
}) => {
  return (
    <div
      className={styles.container}
      role='status'
    >
      <LoaderCircle
        className={clsx(styles.spinner, isOnColor && styles.dark)}
        size={small ? 16 : 32}
        strokeWidth={small ? 2 : 3}
        absoluteStrokeWidth
      />
      <span className={styles.vsHidden}>Laddar, vänligen vänta.</span>
    </div>
  )
}
