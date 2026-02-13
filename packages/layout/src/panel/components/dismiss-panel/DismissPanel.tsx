import clsx from 'clsx'
import { Button } from '@midas-ds/components'
import { X } from 'lucide-react'
import { PanelHeader, PanelBody, PanelBodyProps, PanelTitle } from '..'
import styles from './DismissPanel.module.css'

export interface DismissTriggerProps {
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const DismissPanel = ({
  children,
  className,
  isOpen,
  onOpenChange,
  title,
  ...rest
}: PanelBodyProps & DismissTriggerProps) => {
  const handlePress = () => onOpenChange?.(!isOpen)

  if (!isOpen) {
    return null
  }

  return (
    <PanelBody
      className={clsx(className, styles.dismissPanel)}
      {...rest}
    >
      <PanelHeader>
        <div>
          {title && (
            <PanelTitle
              className={styles.panelTitle}
              title={title}
            />
          )}
        </div>
        <Button
          variant='icon'
          aria-label='todo: closeMenu'
          onPress={handlePress}
        >
          <X size={20} />
        </Button>
      </PanelHeader>
      {children}
    </PanelBody>
  )
}
