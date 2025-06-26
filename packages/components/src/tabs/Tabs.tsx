'use client'

import * as React from 'react'
import {
  Tabs as AriaTabs,
  type TabsProps as AriaTabsProps,
} from 'react-aria-components'
import clsx from 'clsx'
import useObserveElement from '../utils/useObserveElement'
import { windowSizes } from '../theme'
import { Tab, TabList, TabPanel } from '.'
import styles from './Tabs.module.css'

export interface TabsProps extends AriaTabsProps {
  /**
   * An array of tab titles
   * @deprecated since v.10.3.0 please use the declarative API
   * @see {@link https://designsystem.migrationsverket.se/components/tabs/|Tabs}
   */
  tabs?: string[]
  /**
   * Label for accessibility
   * @deprecated since v.10.3.0 please use the declarative API and use the `aria-label` prop on TabList instead
   * @see {@link https://designsystem.migrationsverket.se/components/tabs/|Tabs}
   */
  label?: string
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
    rest.orientation || bodyWidth >= windowSizes.md ? 'horizontal' : 'vertical'

  if (!tabs?.length) {
    return (
      <AriaTabs
        orientation={orientation}
        className={clsx(styles.container, className)}
        children={children}
        {...rest}
      />
    )
  }

  if (typeof children === 'function') {
    console.error(
      'Only the declarative API supports passing a function to children, replace the "tabs" prop according to the documentation: https://designsystem.migrationsverket.se/components/tabs/ ',
    )
    return null
  }

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
    >
      <TabList aria-label={label}>
        {tabs.map(tab => (
          <Tab
            key={tab}
            id={tab}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      {tabs.map(tab => (
        <TabPanel
          key={tab}
          id={tab}
        >
          {tabContentMap[tab]}
        </TabPanel>
      ))}
    </AriaTabs>
  )
}
