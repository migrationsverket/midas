'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { X } from 'lucide-react'
import { PanelHeader, PanelBody, PanelBodyProps, PanelTitle } from '..'
import styles from './DismissPanel.module.css'
import messages from '../../intl/translations.json'

export interface DismissTriggerProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const DismissPanel = ({
  children,
  className,
  isOpen: isOpenProp,
  defaultOpen = true,
  onOpenChange,
  title,
  ...rest
}: PanelBodyProps & DismissTriggerProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = isOpenProp !== undefined
  const isOpen = isControlled ? isOpenProp : internalOpen

  const handlePress = () => {
    const next = !isOpen
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

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
