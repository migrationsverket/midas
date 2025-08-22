import { iconMap } from '../common/icon-map'
import * as React from 'react'
import { X } from 'lucide-react'
import { FeedbackStatus } from '../common/types'
import styles from './InfoBanner.module.css'
import clsx from 'clsx'
import { Button } from '../button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface InfoBannerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * Determines the visual style and semantic meaning of the InfoBanner (e.g., success, info, warning, important).
   **/
  type: FeedbackStatus
  /** The title of the banner. */
  title?: string
  /** The message to be displayed in the banner. Can be a string or a React node. */
  message?: string | React.ReactNode
  /** Additional elements to be displayed inside the banner. */
  children?: React.ReactNode

  /**
   * If true, a dismiss button will be displayed in the top right corner.
   */
  isDismissable?: boolean
  /**
   * The initial visibility of the banner when it is uncontrolled.
   */
  defaultOpen?: boolean
  /**
   * Controls the visibility of the banner when it is controlled.
   */
  isOpen?: boolean
  /**
   * Callback fired when the visibility of the banner changes.
   */
  onOpenChange?: (isOpen: boolean) => void
}

/**
 * Displays a static message as an inline banner
 */
export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  message,
  type,
  children,
  isDismissable = false,
  defaultOpen,
  isOpen: controlledIsOpen,
  onOpenChange,
  ...rest
}) => {
  const Icon = iconMap[type]
  const [isOpen, setIsOpen] = React.useState<boolean>(controlledIsOpen ?? defaultOpen ?? true)
  const strings = useLocalizedStringFormatter(messages)

  React.useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen)
    }
  }, [controlledIsOpen])

  const handleDismiss = () => {
    setIsOpen(false)
    onOpenChange?.(false)
  }

  if (isOpen)
    return (
      <div
        {...rest}
        className={clsx(styles.infoBanner, styles[type], rest.className)}
      >
        <Icon
          size={20}
          aria-hidden
          className={styles.icon}
        />
        <div className={styles.content}>
          {title && <strong className={styles.heading}>{title}</strong>}
          <div className={styles.text}>
            {message}
            {children}
          </div>
        </div>
        {isDismissable && (
          <div className={styles.dismissable}>
            <Button
              variant='icon'
              aria-label={strings.format('close')}
              onPress={handleDismiss}
            >
              <X size={20} />
            </Button>
          </div>
        )}
      </div>
    )

  return null
}
