import * as React from 'react'
import { X } from 'lucide-react'
import styles from './InfoBanner.module.css'
import clsx from '../utils/clsx'
import { Button } from '../button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import { FeedbackStatusIcon } from '../common/FeedbackStatusIcon'
import { FeedbackStatus } from '../common/types'

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
  defaultOpen = true,
  isOpen: controlledIsOpen,
  onOpenChange,
  ...rest
}) => {
  const isControlled = typeof controlledIsOpen !== 'undefined'

  const [isOpen, setIsOpen] = React.useState<boolean>(defaultOpen)

  const strings = useLocalizedStringFormatter(messages)

  const handleClose = () => {
    onOpenChange?.(false)

    if (!isControlled) {
      setIsOpen(false)
    }
  }

  if ((isControlled && controlledIsOpen) || (!isControlled && isOpen))
    return (
      <div
        {...rest}
        className={clsx(styles.infoBanner, styles[type], rest.className)}
      >
        <FeedbackStatusIcon
          aria-hidden
          className={styles.icon}
          status={type}
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
              onPress={handleClose}
            >
              <X size={20} />
            </Button>
          </div>
        )}
      </div>
    )

  return null
}
