import * as React from 'react'
import { CircleCheck, Info, AlertTriangle, AlertCircle, X } from 'lucide-react'
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
   *  Specify what state the InfoBanner represents
   **/
  type: 'success' | 'info' | 'important' | 'warning'
  /** Specify the title */
  title?: string
  /** Specify the message. Element or string */
  message?: string | React.ReactNode
  /** Additional elements displayed inside the banner */
  children?: React.ReactNode
  /**
   *  Specify if the InfoBanner should have a dismiss button in the top right corner
   *  @deprecated since 10.0.1. Please use `isDismissable` instead
   */
  dismissable?: boolean
  /**
   *  Specify if the InfoBanner should have a dismiss button in the top right corner
   */
  isDismissable?: boolean
}

const iconMap = {
  success: CircleCheck,
  info: Info,
  important: AlertCircle,
  warning: AlertTriangle,
}

/**
 * Displays a static message as an inline banner
 */
export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  message,
  type,
  children,
  dismissable = false,
  isDismissable = false,
  ...rest
}) => {
  const Icon = iconMap[type]
  const [show, setShow] = React.useState<boolean>(true)
  const strings = useLocalizedStringFormatter(messages)

  if (show)
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
        {(dismissable || isDismissable) && (
          <div className={styles.dismissable}>
            <Button
              variant='icon'
              aria-label={strings.format('close')}
              onPress={() => setShow(false)}
            >
              <X size={20} />
            </Button>
          </div>
        )}
      </div>
    )

  return null
}
