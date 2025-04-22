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
  /**
   * @deprecated
   * Please use `defaultSelectedKey` instead
   */
  defaultSelected?: string
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
  ...rest
}) => {
  const { width: bodyWidth } = useObserveElement(
    typeof document === 'undefined' ? null : document.body,
    { includePadding: true },
  )

  const orientation: AriaTabsProps['orientation'] =
    bodyWidth >= windowSizes.md ? 'horizontal' : 'vertical'

  const childrenArray = React.Children.toArray(children)

  if (childrenArray.length !== tabs.length) {
    console.error(
      `The number of children must match the number of tabs. Children: ${childrenArray.length} Tabs: ${tabs.length}`,
    )
    return null
  }

  const tabContentMap = childrenArray.reduce(
    (acc, child, index) => {
      if (React.isValidElement<TabPanelChildProps>(child)) {
        const title = tabs[index]
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
      defaultSelectedKey={rest.defaultSelected || rest.defaultSelectedKey}
    >
      <TabList
        aria-label={label}
        className={styles.list}
      >
        {tabs.map(tab => (
          <Tab
            key={tab}
            id={tab}
            className={styles.listItem}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      {tabs.map(tab => (
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
