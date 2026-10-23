'use client'

import { Menu } from 'lucide-react'
import {
  composeRenderProps,
  Dialog,
  DialogTriggerProps,
  Modal,
} from 'react-aria-components'
import {
  Button,
  clsx,
  DialogTrigger,
  Text,
  useLocalizedStringFormatter,
  ModalOverlay,
  ModalOverlayProps,
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
  /**
   * Which side of the screen the drawer slides in from. Place the `MobileMenu`
   * first in the `Header` for `'left'` and last for `'right'`, so the trigger
   * button lines up with the drawer.
   *
   * @default 'left'
   */
  placement?: 'left' | 'right'
}

export const MobileMenu = ({
  children,
  className,
  defaultOpen,
  isOpen,
  onOpenChange,
  placement = 'left',
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
          size='medium'
          className={clsx(
            styles.triggerButton,
            placement === 'right' && styles.right,
          )}
          data-mobile-menu-placement={placement}
        />
        <ModalOverlay
          className={clsx(className, styles.overlay)}
          isDismissable
          {...rest}
        >
          {composeRenderProps(children, children => (
            <Modal
              className={clsx(
                styles.drawer,
                placement === 'right' && styles.right,
              )}
            >
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
