import styles from './Spinner.module.css'
import { LoaderCircle } from 'lucide-react'
import clsx from '../utils/clsx'
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
   * @deprecated since 14.0.0. Use variant instead
   */
  isOnColor?: boolean
  /** Variant for standalone use. Replaces isOnColor. */
  variant?: 'primary' | 'onColor'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  variant,
  isOnColor,
  className,
}) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <div
      className={clsx(styles.container, className)}
      role='status'
    >
      <LoaderCircle
        className={clsx(
          styles.spinner,
          variant === 'primary' && styles.primary,
          (variant === 'onColor' || (!variant && isOnColor)) && styles.onColor,
        )}
        size={small ? 20 : 96}
        strokeWidth={small ? 2 : 8}
        absoluteStrokeWidth
      />
      <VisuallyHidden>{strings.format('loadingPleaseWait')}</VisuallyHidden>
    </div>
  )
}
