import { forwardRef } from 'react'
import {
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './ModalOverlay.module.css'

export type { ModalOverlayProps }

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, ...rest }, ref) => (
    <AriaModalOverlay
      className={clsx(className, styles.modalOverlay)}
      ref={ref}
      {...rest}
    />
  ),
)

ModalOverlay.displayName = 'ModalOverlay'
