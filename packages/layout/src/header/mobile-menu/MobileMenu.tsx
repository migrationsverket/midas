'use client'

import { ReactNode } from 'react'
import { Menu } from 'lucide-react'
import {
  composeRenderProps,
  Dialog,
  Modal,
  ModalOverlay,
} from 'react-aria-components'
import { useControlledState } from '@react-stately/utils'
import { Button, DialogTrigger } from '@midas-ds/components'
import { useIsMobileDevice } from '../../utils/useIsMobileDevice'
import styles from './MobileMenu.module.css'

export interface MobileMenuProps {
  children?: ReactNode
  isDrawerOpen?: boolean
  defaultDrawerOpen?: boolean
  onDrawerOpenChange?: (isDrawerOpen: boolean) => void
}

export const MobileMenu = ({
  children,
  isDrawerOpen: isDrawerOpenProp,
  defaultDrawerOpen = false,
  onDrawerOpenChange,
}: MobileMenuProps) => {
  const isMobile = useIsMobileDevice()

  const [isDrawerOpen, setIsDrawerOpen] = useControlledState(
    isDrawerOpenProp,
    defaultDrawerOpen,
    onDrawerOpenChange,
  )

  const handlePress = () => setIsDrawerOpen(prev => !prev)

  if (!isMobile) {
    return null
  }

  return (
    <DialogTrigger>
      <Button
        icon={Menu}
        variant='icon'
        onPress={handlePress}
      />
      <ModalOverlay
        className={styles.overlay}
        isDismissable
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        {composeRenderProps(children, children => (
          <Modal className={styles.drawer}>
            <Dialog>{children}</Dialog>
          </Modal>
        ))}
      </ModalOverlay>
    </DialogTrigger>
  )
}
