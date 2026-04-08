'use client'

import { Menu } from 'lucide-react'
import {
  composeRenderProps,
  Dialog,
  DialogTriggerProps,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from 'react-aria-components'
import {
  Button,
  clsx,
  DialogTrigger,
  Text,
  useLocalizedStringFormatter,
} from '@midas-ds/components'
import { useIsMobileDevice } from '../../utils'
import { MobileMenuContext } from './MobileMenuContext'
import messages from './intl/translations.json'
import styles from './MobileMenu.module.css'

type StateValues = 'isOpen' | 'defaultOpen' | 'onOpenChange'

export interface MobileMenuProps
  extends
    Omit<ModalOverlayProps, StateValues>,
    Pick<DialogTriggerProps, StateValues> {
  /**
   * A visible title for the menu
   */
  title?: string
}

export const MobileMenu = ({
  children,
  className,
  defaultOpen,
  isOpen,
  onOpenChange,
  title,
  ...rest
}: MobileMenuProps) => {
  const isMobile = useIsMobileDevice()
  const strings = useLocalizedStringFormatter(messages)

  return isMobile ? (
    <MobileMenuContext.Provider value={{}}>
      <DialogTrigger
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      >
        <Button
          aria-label={strings.format('openMenu')}
          icon={Menu}
          variant='icon'
        />
        <ModalOverlay
          className={clsx(className, styles.overlay)}
          isDismissable
          {...rest}
        >
          {composeRenderProps(children, children => (
            <Modal className={styles.drawer}>
              <Dialog className={styles.dialog}>
                {title && <Text className={styles.header}>{title}</Text>}
                {children}
              </Dialog>
            </Modal>
          ))}
        </ModalOverlay>
      </DialogTrigger>
    </MobileMenuContext.Provider>
  ) : null
}
