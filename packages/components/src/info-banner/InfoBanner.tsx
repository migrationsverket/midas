import * as React from 'react'
import { CircleCheck, Info, AlertTriangle, AlertCircle, X } from 'lucide-react'
import styles from './InfoBanner.module.css'
import clsx from 'clsx'
import { Button } from '../button'

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
   */
  dismissable?: boolean
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
  ...rest
}) => {
  const Icon = iconMap[type]
  const [show, setShow] = React.useState<boolean>(true)

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
        {dismissable && (
          <div className={styles.dismissable}>
            <Button
              variant='icon'
              aria-label='Stäng'
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
