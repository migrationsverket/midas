'use client'

import styles from './Modal.module.css'
import {
  Dialog,
  DialogTrigger,
  Modal as ModalAria,
  ModalOverlayProps,
  OverlayTriggerStateContext
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '@midas-ds/button'
import React from 'react'

export { DialogTrigger, OverlayTriggerStateContext }

interface MidasModalBody
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
}

interface MidasModal extends ModalOverlayProps {
  children: React.ReactNode
}

export const ModalHeader: React.FC = () => {
  const state = React.useContext(OverlayTriggerStateContext)
  return (
    <div className={styles.modalHeader}>
      <Button
        onPress={state.close}
        variant='tertiary'
        icon={X}
        iconPlacement='right'
      >
        Stäng
      </Button>
    </div>
  )
}

export const ModalBody: React.FC<MidasModalBody> = ({ children, ...rest }) => {
  return (
    <div
      className={styles.modalBody}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Modal: React.FC<MidasModal> = ({ children, ...rest }) => {
  return (
    <ModalAria
      className={styles.modal}
      {...rest}
    >
      <Dialog className={styles.modalDialog}>{children}</Dialog>
    </ModalAria>
  )
}
