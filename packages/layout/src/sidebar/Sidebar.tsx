'use client'

import React from 'react'
import clsx from 'clsx'
import { PanelLeftClose } from 'lucide-react'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { useControlledState } from '@react-stately/utils'
import { filterDOMProps } from '@react-aria/utils'
import {
  PanelBody,
  PanelBodyProps,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from '../panel'
import messages from './intl/translations.json'
import { useIsMobileDevice } from '../utils'
import { SidebarContext } from './SidebarContext'
import styles from './Sidebar.module.css'

export interface SidebarProps extends PanelBodyProps {
  title: string
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapseChange?: (isCollapsed: boolean) => void
}

export const Sidebar = ({
  children,
  className,
  title,
  ...props
}: SidebarProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const isMobileDevice = useIsMobileDevice()

  const [isCollapsed, setIsCollapsed] = useControlledState(
    props.isCollapsed,
    props.defaultCollapsed || false,
    props.onCollapseChange,
  )

  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handlePress = () => {
    setIsTransitioning(true)
    setIsCollapsed(previouslyCollapsed => !previouslyCollapsed)
  }

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName === 'width' && e.target === e.currentTarget) {
      setIsTransitioning(false)
    }
  }

  return isMobileDevice ? null : (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <PanelBody
        className={clsx(className, styles.sidebar, {
          [styles.collapsed]: isCollapsed,
        })}
        data-transitioning={isTransitioning || undefined}
        onTransitionEnd={handleTransitionEnd}
        {...filterDOMProps(props)}
      >
        <PanelHeader
          className={clsx(styles.sidebarHeader, {
            [styles.collapsed]: isCollapsed,
          })}
        >
          <PanelTitle
            className={clsx(styles.sidebarTitle, {
              [styles.collapsed]: isCollapsed,
            })}
            title={title}
          />
          <Button
            aria-label={
              isCollapsed
                ? strings.format('expandSidebar')
                : strings.format('collapseSidebar')
            }
            onPress={handlePress}
            variant='icon'
            size='medium'
          >
            <span
              className={clsx(styles.collapseButton, {
                [styles.collapsed]: isCollapsed,
              })}
            >
              <PanelLeftClose size={20} />
            </span>
          </Button>
        </PanelHeader>
        <PanelContent className={styles.sidebarContent}>
          {children}
        </PanelContent>
      </PanelBody>
    </SidebarContext.Provider>
  )
}
