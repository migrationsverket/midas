import styles from './Modal.module.css'
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal as ModalAria,
  ModalOverlay,
} from 'react-aria-components'
import { X } from 'lucide-react'

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
      <ModalOverlay className={styles.myoverlay}>
        <ModalAria>
          <Dialog className={styles.mymodal}>
            {({ close }: { close: () => void }) => (
              <>
                <Heading
                  slot="title"
                  className={styles.header}
                >
                  <Button
                    onPress={close}
                    className={styles.btnClose}
                  >
                    Stäng
                    <X
                      className={styles.icon}
                      height={16}
                      width={16}
                    />
                    {children}
                  </Button>
                </Heading>
              </>
            )}
          </Dialog>
        </ModalAria>
      </ModalOverlay>
    </DialogTrigger>
  )
}
