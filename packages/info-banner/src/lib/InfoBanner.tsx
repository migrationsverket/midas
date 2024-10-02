import React, { ReactNode, useState } from 'react'
import { CircleCheck, Info, AlertTriangle, AlertCircle, X } from 'lucide-react'
import styles from './InfoBanner.module.css'
import clsx from 'clsx'
import { Button } from '@midas-ds/button'

export type InfoBannerProps = {
  type: 'success' | 'info' | 'important' | 'warning'
  title?: string
  message?: ReactNode | string
  children?: ReactNode
  dismissable?: boolean
}

const iconMap = {
  success: CircleCheck,
  info: Info,
  important: AlertCircle,
  warning: AlertTriangle,
}

export const InfoBanner: React.FC<InfoBannerProps> = ({
  title,
  message,
  type,
  children,
  dismissable = false,
}) => {
  const Icon = iconMap[type]
  const [show, setShow] = useState<boolean>(true)

  if (show)
    return (
      <div className={clsx(styles.infoBanner, styles[type])}>
        <Icon
          size={20}
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
              variant="tertiary"
              size="small"
              aria-label="Stäng"
              onPress={() => setShow(false)}
            >
              <X size={16} />
            </Button>
          </div>
        )}
      </div>
    )

  return null
}
