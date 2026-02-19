'use client'

import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { PanelContext } from '../..'
import { PanelBody, PanelBodyProps } from '../panel-body/PanelBody'
import { PanelHeader } from '../panel-header/PanelHeader'
import { PanelTitle } from '../panel-title'
import { Drawer } from '../drawer'
import messages from '../../intl/translations.json'
import { useControlledState } from '../../../utils/useControlledState'
import { useIsMobileDevice } from '../../../utils/useIsMobileDevice'
import styles from './CollapsePanel.module.css'

export interface CollapseTriggerProps {
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapseChange?: (isCollapsed: boolean) => void
  isDrawerOpen?: boolean
  defaultDrawerOpen?: boolean
  onDrawerOpenChange?: (isDrawerOpen: boolean) => void
}

export const CollapsePanel = ({
  id,
  children,
  className,
  isCollapsed: isCollapsedProp,
  defaultCollapsed = false,
  onCollapseChange,
  isDrawerOpen: isDrawerOpenProp,
  defaultDrawerOpen = false,
  onDrawerOpenChange,
  title,
  ...rest
  // TODO: In mobile mode the PanelBodyProps is not the correct type
  // Either find the common props between aside and dialog
  // or make an earlier separation between the panels
}: PanelBodyProps & CollapseTriggerProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const isMobileDevice = useIsMobileDevice()

  const [isCollapsed, setIsCollapsed] = useControlledState(
    isCollapsedProp,
    defaultCollapsed,
    onCollapseChange,
  )

  const [isDrawerOpen, setIsDrawerOpen] = useControlledState(
    isDrawerOpenProp,
    defaultDrawerOpen,
    onDrawerOpenChange,
  )

  const handlePress = () =>
    setIsCollapsed(previouslyCollapsed => !previouslyCollapsed)

  return isMobileDevice ? (
    <Drawer
      id={id}
      isOpen={isDrawerOpen}
      onOpenChange={setIsDrawerOpen}
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
      </PanelHeader>
      {children}
    </Drawer>
  ) : (
    <PanelContext.Provider value={{ isCollapsed }}>
      <PanelBody
        className={clsx(className, styles.collapsePanel, {
          [styles.collapsed]: isCollapsed,
        })}
        {...rest}
      >
        <PanelHeader>
          <div>
            {!isCollapsed && title && (
              <PanelTitle
                className={styles.panelTitle}
                title={title}
              />
            )}
          </div>
          <Button
            variant='icon'
            aria-label={
              isCollapsed
                ? strings.format('expandSidebar')
                : strings.format('collapseSidebar')
            }
            onPress={handlePress}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </Button>
        </PanelHeader>
        {children}
      </PanelBody>
    </PanelContext.Provider>
  )
}
