'use client'

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Button, useLocalizedStringFormatter, clsx } from '@midas-ds/components'
import { useControlledState } from '@react-stately/utils'
import { PanelBody, PanelHeader, PanelProps, PanelTitle } from '..'
import messages from '../intl/translations.json'
import { useIsMobileDevice } from '../../utils'
import { CollapsePanelContext } from './CollapsePanelContext'
import styles from './CollapsePanel.module.css'

export interface CollapseTriggerProps {
  isCollapsed?: boolean
  defaultCollapsed?: boolean
  onCollapseChange?: (isCollapsed: boolean) => void
}

export type CollapsePanelProps = Omit<PanelProps<'collapse'>, 'variant'> &
  CollapseTriggerProps

export const CollapsePanel = ({
  children,
  className,
  isCollapsed: isCollapsedProp,
  defaultCollapsed = false,
  onCollapseChange,
  title,
  ...rest
}: CollapsePanelProps) => {
  const strings = useLocalizedStringFormatter(messages)

  const isMobileDevice = useIsMobileDevice()

  const [isCollapsed, setIsCollapsed] = useControlledState(
    isCollapsedProp,
    defaultCollapsed,
    onCollapseChange,
  )

  const handlePress = () =>
    setIsCollapsed(previouslyCollapsed => !previouslyCollapsed)

  return isMobileDevice ? null : (
    <CollapsePanelContext.Provider value={{ isCollapsed }}>
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
    </CollapsePanelContext.Provider>
  )
}
