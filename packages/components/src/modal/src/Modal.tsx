'use client'

import * as React from 'react'
import styles from 'packages/components/src/modal/src/Modal.module.css'
import { X } from 'lucide-react'
import { Button } from '@midas-ds/button'
import clsx from 'clsx'

interface MidasModal
  extends React.DetailedHTMLProps<
    React.DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  > {
  /** Id for accessibility */
  id: string
  /** Heading for the modal window */
  title: string
  /** Whether the modal is open or not */
  isOpen: boolean
  /** State handler to toggle isOpen */
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
