import React from 'react'
import { CircleCheck, Info, AlertTriangle, AlertCircle, X } from 'lucide-react'
import styles from './InfoBanner.module.css'
import clsx from 'clsx'
import { Button } from '@midas-ds/button'

export interface InfoBannerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type: 'success' | 'info' | 'important' | 'warning'
  title?: string
  message?: React.ReactNode | string
  children?: React.ReactNode
  dismissable?: boolean
}

const iconMap = {
  success: CircleCheck,
  info: Info,
  important: AlertCircle,
  warning: AlertTriangle
}

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
        className={clsx(styles.infoBanner, styles[type], rest.className)}
        {...rest}
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
