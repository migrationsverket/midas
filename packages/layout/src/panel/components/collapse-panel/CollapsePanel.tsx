'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Button, useLocalizedStringFormatter } from '@midas-ds/components'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { PanelContext } from '../..'
import { PanelBody, PanelBodyProps } from '../panel-body/PanelBody'
import { PanelHeader } from '../panel-header/PanelHeader'
import styles from './CollapsePanel.module.css'
import { PanelTitle } from '../panel-title'
import messages from '../../intl/translations.json'

export interface CollapseTriggerProps {
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapseChange?: (isCollapsed: boolean) => void
}

export const CollapsePanel = ({
  children,
  className,
  isCollapsed: isCollapsedProp,
  defaultCollapsed = false,
  onCollapseChange,
  title,
  ...rest
}: PanelBodyProps & CollapseTriggerProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isControlled = isCollapsedProp !== undefined
  const isCollapsed = isControlled ? isCollapsedProp : internalCollapsed

  const handlePress = () => {
    const next = !isCollapsed
    if (!isControlled) setInternalCollapsed(next)
    onCollapseChange?.(next)
  }

  return (
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
