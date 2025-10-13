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
  /** Color of the spinner. Defaults to the current text color. */
  color?: string
  /**
   * @deprecated since 14.0.0.
   * Variant for standalone use. Replaces isOnColor.
   * */
  variant?: 'primary' | 'onColor'
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  className,
  color,
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
        )}
        size={small ? 20 : 96}
        strokeWidth={small ? 2 : 8}
        absoluteStrokeWidth
        color={color}
      />
      <VisuallyHidden>{strings.format('loadingPleaseWait')}</VisuallyHidden>
    </div>
  )
}
