'use client'

import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { X } from 'lucide-react'
import { PanelHeader, PanelBody, PanelBodyProps, PanelTitle } from '..'
import styles from './DismissPanel.module.css'
import messages from '../../intl/translations.json'
import { useControlledState } from '@react-stately/utils'

export interface DismissTriggerProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const DismissPanel = ({
  children,
  className,
  isOpen: isOpenProp,
  defaultOpen = false,
  onOpenChange,
  title,
  ...rest
}: PanelBodyProps & DismissTriggerProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const [isOpen, setIsOpen] = useControlledState(
    isOpenProp,
    defaultOpen,
    onOpenChange,
  )

  const handlePress = () => setIsOpen(previouslyOpen => !previouslyOpen)

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
          aria-label={strings.format('closePanel')}
          onPress={handlePress}
        >
          <X size={20} />
        </Button>
      </PanelHeader>
      {children}
    </PanelBody>
  )
}
