import styles from './Modal.module.css'
import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal as ModalAria,
  ModalOverlay
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '@midas-ds/button'
export { DialogTrigger }
interface KeyboardModalTriggerProps {
  children?: React.ReactNode
}

export const Modal: React.FC<KeyboardModalTriggerProps> = ({ children }) => {
  return (
    <ModalOverlay className={styles.overlay}>
      <ModalAria className={styles.modal}>
        <Dialog className={styles.dialog}>
          {({ close }: { close: () => void }) => (
            <>
              <Heading className={styles.header}>
                <Button
                  onPress={close}
                  variant='tertiary'
                >
                  Stäng
                  <X
                    className={styles.icon}
                    height={16}
                    width={16}
                  />
                </Button>
              </Heading>
              <div className={styles.divContainer}>{children}</div>
            </>
          )}
        </Dialog>
      </ModalAria>
    </ModalOverlay>
  )
}
