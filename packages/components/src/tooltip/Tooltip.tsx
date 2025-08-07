import clsx from 'clsx'
import styles from './Tooltip.module.css'
import * as React from 'react'
import {
  OverlayArrow,
  TooltipTrigger as AriaTooltipTrigger,
  type TooltipProps,
  Tooltip as AriaTooltip,
  TooltipTriggerComponentProps,
} from 'react-aria-components'

export interface MidasTooltipProps extends Omit<TooltipProps, 'children'> {
  children: React.ReactNode
}

export function Tooltip({ children, className, ...props }: MidasTooltipProps) {
  return (
    <AriaTooltip
      className={clsx(styles.tooltip, className)}
      {...props}
    >
      <OverlayArrow className={styles.arrow}>
        <svg
          width={8}
          height={8}
          viewBox='0 0 8 8'
        >
          <path d='M0 0 L4 4 L8 0' />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  )
}

export function TooltipTrigger({
  children,
  delay = 0,
  ...props
}: TooltipTriggerComponentProps) {
  return (
    <AriaTooltipTrigger
      delay={delay}
      {...props}
    >
      {children}
    </AriaTooltipTrigger>
  )
}
