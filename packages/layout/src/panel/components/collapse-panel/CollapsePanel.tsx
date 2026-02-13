import clsx from 'clsx'
import { Button } from '@midas-ds/components'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { PanelContext } from '../..'
import { PanelBody, PanelBodyProps } from '../panel-body/PanelBody'
import { PanelHeader } from '../panel-header/PanelHeader'
import styles from './CollapsePanel.module.css'
import { PanelTitle } from '../panel-title'

export interface CollapseTriggerProps {
  isCollapsed?: boolean
  onCollapseChange?: (isCollapsed: boolean) => void
}

export const CollapsePanel = ({
  children,
  className,
  isCollapsed,
  onCollapseChange,
  title,
  ...rest
}: PanelBodyProps & CollapseTriggerProps) => {
  const handlePress = () => onCollapseChange?.(!isCollapsed)

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
              isCollapsed ? 'todo: maximizeMenu' : 'todo: minimizeMenu'
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
