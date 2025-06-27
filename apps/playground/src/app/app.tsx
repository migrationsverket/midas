import { Tab, TabList, Tabs, TabPanel, Text } from '@midas-ds/components'

export default function App() {
  return (
    <>
      <Tabs tabs={['Bananas', 'Apples']}>
        <Text>Old information about Bananas</Text>
        <Text>Old information about Apples</Text>
      </Tabs>

      <Tabs>
        <TabList>
          <Tab id='bananas'>Bananas</Tab>
          <Tab id='apples'>Apples</Tab>
        </TabList>
        <TabPanel id='bananas'>
          <Text>New declarative style information about Bananas</Text>
        </TabPanel>
        <TabPanel id='apples'>
          <Text>New declarative style information about Apples</Text>
        </TabPanel>
      </Tabs>
    </>
  )
}
