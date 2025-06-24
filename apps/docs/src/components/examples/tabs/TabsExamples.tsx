import React from 'react'
import type { Key } from 'react-aria-components'
import { Tabs, Text } from '@midas-ds/components'

export const ControlledExample = () => {
  const tabs = ['Bär', 'Frukter']
  const [selectedTab, setSelectedTab] = React.useState<Key>(tabs[1])

  return (
    <>
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
      >
        <Text>Information om Bär</Text>
        <Text>Information om Frukter</Text>
      </Tabs>
      Vald flik: {selectedTab}
    </>
  )
}
