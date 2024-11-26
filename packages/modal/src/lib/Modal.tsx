'use client'

import styles from './Modal.module.css'
import { X } from 'lucide-react'
import { Button } from '@midas-ds/button'
import React from 'react'
import clsx from 'clsx'

interface MidasModal
  extends React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  id: string
  title: string
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const Modal: React.FC<MidasModal> = ({
  id,
  isOpen,
  onOpenChange,
  children,
  title,
  className,
  ...rest
}) => {
  const ref = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen])

  const handleClose = () => {
    ref.current?.close()
    onOpenChange(false)
  }

  const headingId = id + '_heading'

  return (
    <dialog
      id={id}
      ref={ref}
      onCancel={() => onOpenChange(false)}
      className={clsx(styles.modal, className)}
      aria-labelledby={headingId}
      {...rest}
    >
      <div className={styles.modalHeader}>
        <Button
          onPress={() => handleClose()}
          variant='tertiary'
          icon={X}
          iconPlacement='right'
        >
          Stäng
        </Button>
      </div>
      <div className={styles.modalBody}>
        <h2
          className={styles.modalHeading}
          id={headingId}
        >
          {title}
        </h2>
        {children}
      </div>
    </dialog>
  )
}
