import { AriaDialogProps } from 'react-aria'
import {
  DialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  Dialog as AriaDialog,
} from 'react-aria-components'
import * as React from 'react'
import { Button } from '../button'
import styles from './Dialog.module.css'
import { X } from 'lucide-react'
import { AriaModalOverlayProps } from '@react-aria/overlays'
import { FocusScope } from '@react-aria/focus'
import { Heading } from '../heading'

interface DialogProps extends AriaDialogProps {
  /**
   * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
   */
  title?: React.ReactNode
  children: React.ReactNode
}

export { DialogTrigger }

export const Modal: React.FC<AriaModalOverlayProps & DialogProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <AriaDialog {...props}>
      <ModalOverlay
        {...props}
        className={styles.overlay}
      >
        <FocusScope
          contain
          autoFocus
          restoreFocus
        >
          <AriaModal
            {...props}
            className={styles.modal}
          >
            <div className={styles.modalHeader}>
              <Button
                slot='close'
                variant='tertiary'
                icon={X}
                iconPlacement='right'
              >
                Stäng
              </Button>
            </div>
            <div
              className={styles.modalBody}
              tabIndex={-1}
            >
              {title && <Heading level={2}>{title}</Heading>}
              {children}
            </div>
          </AriaModal>
        </FocusScope>
      </ModalOverlay>
    </AriaDialog>
  )
}
