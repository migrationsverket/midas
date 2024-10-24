import styles from './Modal.module.css'
import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal as ModalAria,
  ModalOverlay,
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '../../../../packages/button/src/lib/Button'
interface KeyboardModalTriggerProps {
  children?: React.ReactNode
}

export const Modal: React.FC<KeyboardModalTriggerProps> = ({
  children,

  ...props
}) => {
  return (
    <DialogTrigger>
      <Button>Open dialog</Button>
      <ModalOverlay className={styles.overlay}>
        <ModalAria className={styles.modal}>
          <Dialog className={styles.dialog}>
            {({ close }: { close: () => void }) => (
              <>
                <Heading className={styles.header}>
                  <Button
                    onPress={close}
                    variant="tertiary"
                    size="small"
                  >
                    Stäng
                    <X
                      className={styles.icon}
                      height={16}
                      width={16}
                    />
                  </Button>
                </Heading>
                <div className={styles.divChildren}>{children}</div>
              </>
            )}
          </Dialog>
        </ModalAria>
      </ModalOverlay>
    </DialogTrigger>
  )
}
