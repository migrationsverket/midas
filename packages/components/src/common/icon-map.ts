import { Check, Info, AlertTriangle, Flag, LucideIcon } from 'lucide-react'
import { FeedbackStatus } from './types'

export const iconMap: Record<FeedbackStatus, LucideIcon> = {
  success: Check,
  info: Info,
  important: Flag,
  warning: AlertTriangle,
}
