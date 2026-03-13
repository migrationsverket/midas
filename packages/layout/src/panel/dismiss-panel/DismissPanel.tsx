'use client'

import { Button, useLocalizedStringFormatter, clsx } from '@midas-ds/components'
import { X } from 'lucide-react'
import { useControlledState } from '@react-stately/utils'
import { type PressEvent } from 'react-aria-components'
import { forwardRef, useRef } from 'react'
import {
  filterDOMProps,
  useEnterAnimation,
  useExitAnimation,
  useObjectRef,
} from '@react-aria/utils'
import { PanelBody, type PanelBodyProps } from '../panel-body'
import { PanelHeader } from '../panel-header'
import { PanelTitle } from '../panel-title'
import messages from '../intl/translations.json'
import styles from './DismissPanel.module.css'

export interface DismissTriggerProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const DismissPanel = (props: PanelBodyProps & DismissTriggerProps) => {
  const [isOpen, setIsOpen] = useControlledState(
    props.isOpen,
    props.defaultOpen || false,
    props.onOpenChange,
  )

  const ref = useRef<HTMLElement>(null)

  const isExiting = useExitAnimation(ref, isOpen)

  const handlePress = () => setIsOpen(previouslyOpen => !previouslyOpen)

  if (!isOpen && !isExiting) {
    return null
  }

  return (
    <DismissPanelInner
      isExiting={isExiting}
      onPress={handlePress}
      ref={ref}
      {...props}
    />
  )
}

const DismissPanelInner = forwardRef<
  HTMLElement,
  PanelBodyProps &
    DismissTriggerProps & {
      isExiting: boolean
      onPress: (e: PressEvent) => void
    }
>(({ className, title, onPress, children, isExiting, ...rest }, ref) => {
  const strings = useLocalizedStringFormatter(messages)
  const objectRef = useObjectRef(ref)
  const isEntering = useEnterAnimation(objectRef)

  return (
    <PanelBody
      className={clsx(className, styles.dismissPanel)}
      ref={objectRef}
      data-entering={isEntering || undefined}
      data-exiting={isExiting || undefined}
      {...filterDOMProps(rest)}
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
          onPress={onPress}
        >
          <X size={20} />
        </Button>
      </PanelHeader>
      {children}
    </PanelBody>
  )
})
