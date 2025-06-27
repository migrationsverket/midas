import React from 'react'
import { type Key } from 'react-aria-components'
import {
  Tab,
  TabPanel,
  TabsProps,
  TabList,
  Tabs,
  Text,
} from '@midas-ds/components'

export const BasicExample: React.FC<Partial<TabsProps>> = props => (
  <Tabs {...props}>
    <TabList aria-label='Viktig information om frukter och bär'>
      <Tab id='vitaminer'>Vitaminer</Tab>
      <Tab id='frukter'>Frysta frukter och bär</Tab>
      <Tab id='hallon'>Frysta importerade hallon</Tab>
    </TabList>
    <TabPanel id='vitaminer'>
      <Text>
        Oavsett om du äter en frukt, lite bär, en näve grönsaker eller
        baljväxter, får du i dig många viktiga näringsämnen som kroppen behöver
        för att må bra - fibrer, C-vitamin, folat/folsyra, vitamin K, kalium och
        antioxidanter, som karotenoider. Eftersom olika sorters frukt och grönt
        innehåller olika näringsämnen är det bra att äta varierat.
      </Text>
    </TabPanel>
    <TabPanel id='frukter'>
      <Text>
        För näringsvärdet spelar det mindre roll om man äter färska eller frysta
        frukter och grönsaker. Frysta produkter håller längre och är ett smart
        sätt att minska matsvinnet.
      </Text>
    </TabPanel>
    <TabPanel id='hallon'>
      <Text>
        Frysta importerade hallon kan vara förorenade med norovirus, som orsakar
        vinterkräksjukan. Det kan också finnas norovirus och hepatit A-virus på
        andra frysta bär men det är mycket ovanligare.
      </Text>
    </TabPanel>
  </Tabs>
)

export const ControlledExample: React.FC<Partial<TabsProps>> = props => {
  const [selectedTab, setSelectedTab] = React.useState<Key>('frukter')

  return (
    <>
      <Tabs
        {...props}
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        style={{ marginBottom: '1rem' }}
      >
        <TabList aria-label='Viktig information om frukter och bär'>
          <Tab id='vitaminer'>Vitaminer</Tab>
          <Tab id='frukter'>Frysta frukter och bär</Tab>
          <Tab id='hallon'>Frysta importerade hallon</Tab>
        </TabList>
        <TabPanel id='vitaminer'>
          <Text>
            Oavsett om du äter en frukt, lite bär, en näve grönsaker eller
            baljväxter, får du i dig många viktiga näringsämnen som kroppen
            behöver för att må bra - fibrer, C-vitamin, folat/folsyra, vitamin
            K, kalium och antioxidanter, som karotenoider. Eftersom olika
            sorters frukt och grönt innehåller olika näringsämnen är det bra att
            äta varierat.
          </Text>
        </TabPanel>
        <TabPanel id='frukter'>
          <Text>
            För näringsvärdet spelar det mindre roll om man äter färska eller
            frysta frukter och grönsaker. Frysta produkter håller längre och är
            ett smart sätt att minska matsvinnet.
          </Text>
        </TabPanel>
        <TabPanel id='hallon'>
          <Text>
            Frysta importerade hallon kan vara förorenade med norovirus, som
            orsakar vinterkräksjukan. Det kan också finnas norovirus och hepatit
            A-virus på andra frysta bär men det är mycket ovanligare.
          </Text>
        </TabPanel>
      </Tabs>
      <pre>Vald flik: {selectedTab}</pre>
    </>
  )
}
