import {
  Dialog,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
  composeRenderProps,
} from 'react-aria-components'
import type { DOMProps } from '@react-types/shared'
import styles from './Drawer.module.css'

export const Drawer = ({
  children,
  id,
  ...props
}: ModalOverlayProps & DOMProps) => (
  <ModalOverlay
    className={styles.overlay}
    isDismissable
    {...props}
  >
    {composeRenderProps(children, children => (
      <Modal className={styles.drawer}>
        <Dialog id={id}>{children}</Dialog>
      </Modal>
    ))}
  </ModalOverlay>
)
