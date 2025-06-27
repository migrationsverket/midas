import styles from './Spinner.module.css'
import { LoaderCircle } from 'lucide-react'
import clsx from 'clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { VisuallyHidden } from 'react-aria'

export interface SpinnerProps {
  /** Displays a smaller spinner when set to true
   * @default false
   */
  small?: boolean
  /** For use on coloured background
   * @default false
   */
  isOnColor?: boolean
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  isOnColor = false,
  className,
}) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <div
      className={clsx(styles.container, className)}
      role='status'
    >
      <LoaderCircle
        className={clsx(styles.spinner, isOnColor && styles.dark)}
        size={small ? 16 : 32}
        strokeWidth={small ? 2 : 3}
        absoluteStrokeWidth
      />
      <VisuallyHidden>{strings.format('loadingPleaseWait')}</VisuallyHidden>
    </div>
  )
}
