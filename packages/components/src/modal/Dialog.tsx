import {
  AriaDialogProps,
  useModalOverlay,
  Overlay,
  useOverlayTrigger,
  OverlayTriggerAria,
} from 'react-aria'
import {
  DialogTrigger,
  Modal as AriaModal,
  ModalOverlay,
  Dialog as AriaDialog,
} from 'react-aria-components'
import { useDialog } from 'react-aria'
import * as React from 'react'
import { useOverlayTriggerState } from 'react-stately'
import { Button } from '../button'
import styles from './Dialog.module.css'
import { X } from 'lucide-react'
import { AriaModalOverlayProps } from '@react-aria/overlays'
import { OverlayTriggerState } from '@react-stately/overlays'
import { OverlayTriggerProps } from '@react-types/overlays'
import clsx from 'clsx'
import { FocusScope } from '@react-aria/focus'
import { Heading } from '../heading'

interface DialogProps extends AriaDialogProps {
  /**
   * An optional title for the dialog. If omitted, please provide an aria-label for accessibility.
   */
  title?: React.ReactNode
  children: React.ReactNode
}
/** @deprecated since v6.0.0 use Modal instead.
 * See docs {@link https://designsystem.migrationsverket.se/components/modal/|Midas Modal}
 */
export const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  ...props
}: DialogProps) => {
  const ref = React.useRef(null)
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div
      {...dialogProps}
      ref={ref}
      className={styles.modalBody}
      aria-modal={true}
    >
      {title && (
        <h2
          {...titleProps}
          className={clsx(styles.modalHeading, titleProps.className)}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}

type MidasModalProps = {
  state: OverlayTriggerState
  children: React.ReactNode
} & AriaModalOverlayProps

const MidasModal: React.FC<MidasModalProps> = ({
  state,
  children,
  ...props
}) => {
  const ref = React.useRef(null)
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref)

  return (
    <Overlay>
      <div
        {...underlayProps}
        className={clsx(styles.overlay, underlayProps.className)}
      >
        <div
          {...modalProps}
          className={clsx(styles.modal, modalProps.className)}
          ref={ref}
        >
          {children}
        </div>
      </div>
    </Overlay>
  )
}
/** @deprecated since v6.0.0, use DialogTrigger instead.
 * See docs {@link https://designsystem.migrationsverket.se/components/modal/|Midas Modal}
 */
export const ModalTrigger: React.FC<
  OverlayTriggerProps & { isDismissable?: boolean } & {
    children: (close: () => void) => JSX.Element
    label?: string | undefined
  }
> = ({ label, children, ...props }) => {
  const state = useOverlayTriggerState(props)
  const { triggerProps, overlayProps }: OverlayTriggerAria = useOverlayTrigger(
    { type: 'dialog' },
    state,
  )

  return (
    <>
      <Button {...triggerProps}>{label}</Button>
      {state.isOpen && (
        <MidasModal
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
        </MidasModal>
      )}
    </>
  )
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
                slot={'close'}
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
