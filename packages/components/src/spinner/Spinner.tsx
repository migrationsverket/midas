import styles from './Spinner.module.css'
import { LoaderCircle } from 'lucide-react'
import clsx from 'clsx'

export interface SpinnerProps {
  /** Displays a smaller when set to true
   * @default false
   * */
  small?: boolean
  /** For use on coloured background
   * @default false
   * */
  isOnColor?: boolean

  /** For use on dark background
   * @default false
   * @deprecated please use `isOnColor` instead
   * */

  dark?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ small, isOnColor, dark }) => {
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
