import { Button, DialogTrigger } from '@midas-ds/components'
import { Drawer } from '..'
import { useControlledState } from '../../utils/useControlledState'
import { useIsMobileDevice } from '../../utils/useIsMobileDevice'
import { ReactNode } from 'react'
import { Menu } from 'lucide-react'

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
      <Drawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      >
        {children}
      </Drawer>
    </DialogTrigger>
  )
}
