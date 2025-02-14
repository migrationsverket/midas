import { AriaDialogProps, useModalOverlay, Overlay, useOverlayTrigger } from 'react-aria'
import {useDialog} from 'react-aria';
import React from 'react'
import { useOverlayTriggerState } from 'react-stately'
import { Button } from '../button'
import styles from './Dialog.module.css'
import { X } from 'lucide-react'

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  ...props
}: DialogProps) => {
  let ref = React.useRef(null)
  let { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div
      {...dialogProps}
      ref={ref}
      className={styles.modalBody}
    >
      {title && (
        <>
          <h2
            {...titleProps}
            className={styles.modalHeading}
          >
            {title}
          </h2>
        </>
      )}
      {children}
    </div>
  )
}

const Modal: React.FC<any> = ({ state, children,...props })=> {
  let ref = React.useRef(null)
  let { modalProps, underlayProps } = useModalOverlay(props, state, ref)

  return (
    <Overlay>
      <div
        className={styles.overlay}
        {...underlayProps}
      >
        <div
          className={styles.modal}
          {...modalProps}
          ref={ref}
          style={{
            background: 'white',
            border: '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  )
}

export const ModalTrigger: React.FC<any> = ({ label, children, ...props })=> {
  let state = useOverlayTriggerState(props)
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
  )

  return (
    <>
      <Button {...triggerProps}>{label}</Button>
      {state.isOpen && (
        <>
          <Modal
            {...props}
            state={state}
          >
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
            {React.cloneElement(children(state.close), overlayProps)}
          </Modal>
        </>
      )}
    </>
  )
}
