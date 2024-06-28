import React, { ReactNode, cloneElement, ReactElement } from 'react'
import { Tabs as AriaTabs, Tab, TabList, TabPanel } from 'react-aria-components'
import styles from './Tabs.module.css'

export interface TabsProps<T extends string> {
  tabs: T[]
  label: string
  defaultSelected?: T // ensures to be the exact value of a title in items
  children: ReactNode
}

// Define a type for children elements that can accept an id prop
interface TabPanelChildProps {
  id?: string
  children?: ReactNode
}

export const Tabs = <T extends string>({
  tabs,
  label,
  defaultSelected,
  children,
}: TabsProps<T>) => {
  const childrenArray = React.Children.toArray(children)

  // Check if the number of children matches the number of tabs
  if (childrenArray.length !== tabs.length) {
    throw new Error(
      `The number of children must match the number of tabs. Children: ${childrenArray.length} Tabs: ${tabs.length}`
    )
  }

  // Create a map of tab titles to their corresponding content
  const tabContentMap = childrenArray.reduce((acc, child, index) => {
    if (React.isValidElement<TabPanelChildProps>(child)) {
      const title = tabs[index]?.toLowerCase()
      if (title) {
        acc[title] = cloneElement(child, { id: title })
      }
    }
    return acc
  }, {} as Record<string, ReactElement<TabPanelChildProps>>)

  return (
    <AriaTabs
      orientation="vertical"
      defaultSelectedKey={defaultSelected && defaultSelected.toLowerCase()}
      className={styles.container}
    >
      <TabList
        aria-label={label}
        className={styles.list}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            id={tab.toLowerCase()}
            className={styles.listItem}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab) => (
        <TabPanel
          key={tab}
          id={tab.toLowerCase()}
          className={styles.panel}
        >
          {tabContentMap[tab.toLowerCase()]}
        </TabPanel>
      ))}
    </AriaTabs>
  )
}
