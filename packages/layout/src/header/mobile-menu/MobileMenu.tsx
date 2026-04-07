'use client'

import { Menu } from 'lucide-react'
import {
  composeRenderProps,
  Dialog,
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

export interface MobileMenuProps extends ModalOverlayProps {
  /**
   * A visible title for the menu
   */
  title?: string
}

export const MobileMenu = ({
  children,
  className,
  isOpen,
  onOpenChange,
  title,
  ...rest
}: MobileMenuProps) => {
  const isMobile = useIsMobileDevice()
  const strings = useLocalizedStringFormatter(messages)

  const handlePress = () => {
    if (typeof onOpenChange === 'function' && typeof isOpen === 'boolean') {
      onOpenChange(!isOpen)
    }
  }

  return isMobile ? (
    <MobileMenuContext.Provider value={{}}>
      <DialogTrigger>
        <Button
          aria-label={strings.format('openMenu')}
          icon={Menu}
          onPress={handlePress}
          variant='icon'
        />
        <ModalOverlay
          className={clsx(className, styles.overlay)}
          isDismissable
          isOpen={isOpen}
          onOpenChange={onOpenChange}
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
