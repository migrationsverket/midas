'use client'

import { Menu } from 'lucide-react'
import { useContext } from 'react'
import {
  composeRenderProps,
  Dialog,
  DialogTriggerProps,
  Modal,
  ToolbarProps,
} from 'react-aria-components'
import {
  clsx,
  DialogTrigger,
  Text,
  useLocalizedStringFormatter,
  ModalOverlay,
  ModalOverlayProps,
} from '@midas-ds/components'
import { useIsMobileDevice } from '../../utils'
import { HeaderAction } from '../header-action'
import { HeaderActionsContext } from '../header-actions/HeaderActionsContext'
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
  /**
   * The trigger button's label, next to or below its icon
   *
   * @default 'Menu' ('Meny' in Swedish)
   */
  label?: string
  /**
   * Places the trigger's label next to its icon, or below it, like the
   * `orientation` of `HeaderActions`. Set both to the same value
   *
   * @default 'horizontal'
   */
  orientation?: ToolbarProps['orientation']
}

export const MobileMenu = ({
  children,
  className,
  defaultOpen,
  isOpen,
  onOpenChange,
  placement = 'left',
  label,
  orientation,
  title,
  ...rest
}: MobileMenuProps) => {
  const isMobile = useIsMobileDevice()
  const strings = useLocalizedStringFormatter(messages)
  const headerActions = useContext(HeaderActionsContext)

  return isMobile ? (
    <MobileMenuContext.Provider value={{}}>
      <DialogTrigger
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      >
        <HeaderActionsContext.Provider
          value={{ orientation: orientation ?? headerActions.orientation }}
        >
          <HeaderAction
            icon={<Menu size={20} />}
            className={clsx(
              styles.triggerButton,
              placement === 'right' && styles.right,
            )}
            data-mobile-menu-placement={placement}
          >
            {label ?? strings.format('menu')}
          </HeaderAction>
        </HeaderActionsContext.Provider>
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
