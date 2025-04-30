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
  /** For use on dark background
   * @default false
   * @deprecated since v8.0.0 please use `isOnColor` instead
   */
  dark?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  isOnColor = false,
  dark = false,
}) => {
  return (
    <div
      className={styles.container}
      role='status'
    >
      <LoaderCircle
        className={clsx(styles.spinner, (isOnColor || dark) && styles.dark)}
        size={small ? 16 : 32}
        strokeWidth={small ? 2 : 3}
        absoluteStrokeWidth
      />
      <span className={styles.vsHidden}>Laddar, vänligen vänta.</span>
    </div>
  )
}
