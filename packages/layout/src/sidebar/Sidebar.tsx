'use client'

import clsx from 'clsx'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { useControlledState } from '@react-stately/utils'
import { filterDOMProps } from '@react-aria/utils'
import {
  PanelBody,
  PanelBodyProps,
  PanelHeader,
  PanelTitle,
  PanelTitleProps,
} from '../panel'
import messages from './intl/translations.json'
import { useIsMobileDevice } from '../utils'
import { SidebarContext } from './SidebarContext'
import styles from './Sidebar.module.css'

export interface SidebarProps
  extends PanelBodyProps, Pick<PanelTitleProps, 'title'> {
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

  const handlePress = () =>
    setIsCollapsed(previouslyCollapsed => !previouslyCollapsed)

  return isMobileDevice ? null : (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <PanelBody
        className={clsx(className, styles.sidebar, {
          [styles.collapsed]: isCollapsed,
        })}
        {...filterDOMProps(props)}
      >
        <aside>
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
        </aside>
      </PanelBody>
    </SidebarContext.Provider>
  )
}
