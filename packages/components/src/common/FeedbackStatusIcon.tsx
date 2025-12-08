import {
  AlertTriangle,
  Check,
  Flag,
  Info,
  LucideIcon,
  LucideProps,
} from 'lucide-react'
import { FeedbackStatus } from './types'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface FeedbackStatusIconProps extends LucideProps {
  status: FeedbackStatus
}

const icons: Record<FeedbackStatus, LucideIcon> = {
  success: Check,
  info: Info,
  important: Flag,
  warning: AlertTriangle,
}

const labels: Record<FeedbackStatus, keyof (typeof messages)['en' | 'sv']> = {
  success: 'ok',
  info: 'information',
  important: 'importantInformation',
  warning: 'warning',
}

export const FeedbackStatusIcon = ({
  status,
  'aria-label': ariaLabel,
  size = 20,
  ...rest
}: FeedbackStatusIconProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const Icon = icons[status]

  return (
    <Icon
      aria-label={ariaLabel || strings.format(labels[status])}
      size={size}
      {...rest}
    />
  )
}
