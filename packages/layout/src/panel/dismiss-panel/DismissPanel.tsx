'use client'

import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { X } from 'lucide-react'
import { useControlledState } from '@react-stately/utils'
import { type PressEvent } from 'react-aria-components'
import { AnimationEvent, forwardRef, useEffect, useRef } from 'react'
import {
  filterDOMProps,
  useEnterAnimation,
  useExitAnimation,
  useObjectRef,
} from '@react-aria/utils'
import { PanelBody } from '../panel-body'
import { PanelHeader } from '../panel-header'
import { PanelTitle } from '../panel-title'
import messages from '../intl/translations.json'
import styles from './DismissPanel.module.css'
import { PanelProps } from '..'

export interface DismissTriggerProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  onExited?: () => void
  promoting?: boolean
  onPromotionEnd?: () => void
}

export type DismissPanelProps = Omit<PanelProps<'dismiss'>, 'variant'> &
  DismissTriggerProps

export const DismissPanel = (props: DismissPanelProps) => {
  const { onExited } = props
  const [isOpen, setIsOpen] = useControlledState(
    props.isOpen,
    props.defaultOpen || false,
    props.onOpenChange,
  )

  const ref = useRef<HTMLDivElement>(null)
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
    <DismissPanelInner
      isExiting={isExiting}
      onPress={handlePress}
      ref={ref}
      {...props}
    />
  )
}

const DismissPanelInner = forwardRef<
  HTMLDivElement,
  DismissPanelProps & {
    isExiting: boolean
    onPress: (e: PressEvent) => void
  }
>(
  (
    {
      className,
      title,
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

    const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && promoting) {
        onPromotionEnd?.()
      }
    }

    return (
      <PanelBody
        aria-hidden={ariaHidden || undefined}
        className={clsx(className, styles.dismissPanel)}
        ref={objectRef}
        data-entering={isEntering || undefined}
        data-exiting={isExiting || undefined}
        data-promoting={promoting || undefined}
        onAnimationEnd={handleAnimationEnd}
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
  },
)
