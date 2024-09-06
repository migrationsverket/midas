import React, { ReactNode } from 'react'
import { CircleCheck, Info, AlertTriangle, AlertCircle } from 'lucide-react'
import styles from './InfoBanner.module.css'
import clsx from 'clsx'

export type InfoBannerProps = {
  title: string
  message: ReactNode | string
  type: 'success' | 'info' | 'important' | 'warning'
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
}) => {
  const Icon = iconMap[type]

  return (
    <div className={clsx(styles.infoBanner, styles[type])}>
      <Icon
        size={20}
        className={styles.icon}
      />
      <div className={styles.content}>
        <strong className={styles.heading}>{title}</strong>
        <div className={styles.text}>{message}</div>
      </div>
    </div>
  )
}
