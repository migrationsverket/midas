import styles from './Spinner.module.css'
import { LoaderCircle } from 'lucide-react'
import clsx from 'clsx'

export interface SpinnerProps {
  small?: boolean
  dark?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ small, dark }) => {
  return (
    <div
      className={styles.container}
      role="status"
    >
      <LoaderCircle
        className={clsx(styles.spinner, dark && styles.dark)}
        size={small ? 16 : 32}
        strokeWidth={small ? 2 : 3}
        absoluteStrokeWidth
      />
      <span className={styles.vsHidden}>Laddar, vänligen vänta.</span>
    </div>
  )
}