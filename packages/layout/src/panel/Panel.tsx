'use client'

import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { X } from 'lucide-react'
import { useControlledState } from '@react-stately/utils'
import { type PressEvent } from 'react-aria-components'
import { AnimationEvent, forwardRef, ReactNode, useEffect, useRef } from 'react'
import {
  filterDOMProps,
  useEnterAnimation,
  useExitAnimation,
  useObjectRef,
} from '@react-aria/utils'
import { PanelBody, PanelBodyProps } from './panel-body'
import { PanelContent } from './panel-content'
import { PanelHeader } from './panel-header'
import { PanelTitle } from './panel-title'
import messages from './intl/translations.json'
import styles from './Panel.module.css'

export interface PanelProps extends PanelBodyProps {
  /** Required unique id used to manage panel state. */
  id: string
  /** Panel title displayed in the header. */
  title: string
  /** Controlled open state. */
  isOpen?: boolean
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean
  /** Callback fired when the panel opens or closes. */
  onOpenChange?: (isOpen: boolean) => void
  /** Callback fired when the exit animation completes. */
  onExited?: () => void
  promoting?: boolean
  onPromotionEnd?: () => void
  /** Custom actions rendered in the panel header, to the right of the title. */
  actions?: ReactNode
}

export const Panel = (props: PanelProps) => {
  const { onExited } = props
  const [isOpen, setIsOpen] = useControlledState(
    props.isOpen,
    props.defaultOpen || false,
    props.onOpenChange,
  )

  const ref = useRef<HTMLElement>(null)
  const isExiting = useExitAnimation(ref, isOpen)

  const handlePress = () => setIsOpen(previouslyOpen => !previouslyOpen)

  useEffect(() => {
    if (!isOpen && !isExiting) {
      onExited?.()
    }
  }, [isOpen, isExiting, onExited])

  if (!isOpen && !isExiting) {
    return null
  }

  return (
    <PanelInner
      isExiting={isExiting}
      onPress={handlePress}
      ref={ref}
      {...props}
    />
  )
}

const PanelInner = forwardRef<
  HTMLElement,
  PanelProps & {
    isExiting: boolean
    onPress: (e: PressEvent) => void
  }
>(
  (
    {
      className,
      title,
      actions,
      onPress,
      children,
      isExiting,
      defaultOpen,
      promoting,
      onPromotionEnd,
      'aria-hidden': ariaHidden,
      ...rest
    },
    ref,
  ) => {
    const strings = useLocalizedStringFormatter(messages)
    const objectRef = useObjectRef(ref)
    const isEntering = useEnterAnimation(objectRef, !defaultOpen)

    const handleAnimationEnd = (e: AnimationEvent<HTMLElement>) => {
      if (e.target === e.currentTarget && promoting) {
        onPromotionEnd?.()
      }
    }

    return (
      <PanelBody
        aria-hidden={ariaHidden || undefined}
        aria-label={title}
        className={clsx(className, styles.panel)}
        ref={objectRef}
        data-entering={isEntering || undefined}
        data-exiting={isExiting || undefined}
        data-promoting={promoting || undefined}
        onAnimationEnd={handleAnimationEnd}
        {...filterDOMProps(rest)}
      >
        <PanelHeader>
          <PanelTitle
            className={styles.panelTitle}
            title={title}
          />
          <div className={styles.panelActions}>
            {actions}
            <Button
              aria-label={strings.format('closePanel')}
              onPress={onPress}
              size='medium'
              variant='icon'
            >
              <X size={20} />
            </Button>
          </div>
        </PanelHeader>
        <PanelContent>{children}</PanelContent>
      </PanelBody>
    )
  },
)
