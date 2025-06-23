'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  Tab,
  TabList,
  TabPanel,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './Tabs.module.css'
import useObserveElement from '../utils/useObserveElement'
import { windowSizes } from '../theme'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '../button'

export interface TabsProps extends Omit<AriaTabsProps, 'orientation'> {
  /**
   * An array of tab titles
   */
  tabs: string[]
  /**
   * Label for accessibility
   */
  label: string
  /**
   * Amount of children must match the amount of tabs
   */
  children: React.ReactNode
  isDissmissable?: true
}

interface TabPanelChildProps {
  id?: string
  children?: React.ReactNode
}

interface TabPanelChildProps {
  id?: string
  children?: React.ReactNode
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  label,
  children,
  className,
  isDissmissable,
  ...rest
}) => {
  const { width: bodyWidth } = useObserveElement(
    typeof document === 'undefined' ? null : document.body,
    { includePadding: true },
  )

  const orientation: AriaTabsProps['orientation'] =
    bodyWidth >= windowSizes.md ? 'horizontal' : 'vertical'

  const childrenArray = React.Children.toArray(children)

  const [localTabs, setLocalTabs] = useState(tabs)
  const [localChildren, setLocalChildren] = useState(childrenArray)

  useEffect(() => {
    setLocalTabs(tabs)
    setLocalChildren(childrenArray)
  }, [tabs, children, childrenArray])

  if (localChildren.length !== localTabs.length) {
    console.error(
      `The number of children must match the number of tabs. Children: ${localChildren.length} Tabs: ${localTabs.length}`,
    )
    return null
  }

  const handleCloseTab = (tabToRemove: string) => {
    if (localTabs.length <= 1) return

    const index = localTabs.indexOf(tabToRemove)
    if (index === -1) return

    const newTabs = [...localTabs]
    newTabs.splice(index, 1)

    const newChildren = [...localChildren]
    newChildren.splice(index, 1)

    setLocalTabs(newTabs)
    setLocalChildren(newChildren)
  }

  const tabContentMap = localChildren.reduce(
    (acc, child, index) => {
      if (React.isValidElement<TabPanelChildProps>(child)) {
        const title = localTabs[index]
        if (title) {
          acc[title] = React.cloneElement(child, { id: title })
        }
      }
      return acc
    },
    {} as Record<string, React.ReactElement<TabPanelChildProps>>,
  )

  return (
    <AriaTabs
      orientation={orientation}
      className={clsx(styles.container, className)}
      {...rest}
    >
      <TabList
        aria-label={label}
        className={styles.list}
      >
        {localTabs.map(tab => (
          <Tab
            key={tab}
            id={tab}
            className={clsx(
              styles.listItem,
              isDissmissable && styles.isDissmissableTab,
              localTabs.length === 1 && styles.lastTab,
            )}
          >
            <span>{tab}</span>
            {isDissmissable && localTabs.length > 1 && (
              <Button
                className={styles.btn}
                variant='icon'
                icon={X}
                size='medium'
                iconPlacement='right'
                onPress={() => handleCloseTab(tab)}
              />
            )}
          </Tab>
        ))}
      </TabList>
      {localTabs.map(tab => (
        <TabPanel
          key={tab}
          id={tab}
          className={styles.panel}
        >
          {tabContentMap[tab]}
        </TabPanel>
      ))}
    </AriaTabs>
  )
}
