import { AriaDialogProps } from 'react-aria'
import {
  DialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  Dialog as AriaDialog,
  ModalOverlayProps,
} from 'react-aria-components'
import * as React from 'react'
import { Button } from '../button'
import styles from './Dialog.module.css'
import { X } from 'lucide-react'
import { Heading } from '../heading'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import clsx from '../utils/clsx'

/**
 * @deprecated since v13.0.1 please use ModalProps instead
 */
export interface DialogProps extends AriaDialogProps {
  /**
   * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
   */
  title?: React.ReactNode
  children: React.ReactNode
}

export interface ModalProps
  extends ModalOverlayProps,
    React.RefAttributes<HTMLDivElement> {
  /**
   * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
   */
  title?: React.ReactNode
  children: React.ReactNode
}

export { DialogTrigger }

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  className,
  ...props
}) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <ModalOverlay
      {...props}
      className={clsx(styles.overlay, className)}
    >
      <AriaModal className={styles.modal}>
        <AriaDialog>
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {title && (
                <Heading
                  level={3}
                  elementType='h2'
                  slot='title'
                >
                  {title}
                </Heading>
              )}
            </div>
            <Button
              slot='close'
              variant='tertiary'
              icon={X}
              iconPlacement='right'
            >
              {strings.format('close')}
            </Button>
          </div>
          <div
            className={styles.modalBody}
            tabIndex={-1}
          >
            {children}
          </div>
        </AriaDialog>
      </AriaModal>
    </ModalOverlay>
  )
}
