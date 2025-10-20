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
  /**
   * @deprecated since v14, define color based on context. Use `color` prop instead.
   *
   * @default false
   */
  isOnColor?: boolean
  /** User defined color */
  color?: string
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  small,
  isOnColor = false,
  color,
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
          !small && styles.large,
          isOnColor && styles.dark,
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
