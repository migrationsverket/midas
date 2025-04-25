import {
  ComboBox,
  ComboBoxItem,
  ComboBoxSelection,
  Item,
  Section,
} from '@midas-ds/components'
import React from 'react'
import { Key } from 'react-aria-components'

export const BasicExample: React.FC = () => (
  <ComboBox
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <ComboBoxItem id='Lime'>Lime</ComboBoxItem>
    <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>
    <ComboBoxItem id='Banan'>Banan</ComboBoxItem>
    <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>
    <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>
  </ComboBox>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<Key | null>(null)

  return (
    <>
      <ComboBox
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        selectedKey={selectedFruit}
        onSelectionChange={setSelectedFruit}
      >
        <ComboBoxItem id='Lime'>Lime</ComboBoxItem>
        <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>
        <ComboBoxItem id='Banan'>Banan</ComboBoxItem>
        <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>
        <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>
      </ComboBox>

      <pre style={{ marginTop: '1rem' }}>Vald frukt: {selectedFruit}</pre>
    </>
  )
}

export const SectionedExample = () => {
  return (
    <ComboBox
      label='Välj din favoritfrukt eller grönsak'
      description='Du kan bara välja en'
      items={[
        {
          name: 'Grönsaker',
          id: 123,
          children: [
            { name: 'Morot', id: 2 },
            { name: 'Broccoli', id: 3 },
            { name: 'Spenat', id: 4 },
            { name: 'Potatis', id: 5 },
            { name: 'Tomat', id: 6 },
          ],
        },
        {
          name: 'Frukter',
          id: 1234,
          children: [
            { name: 'Äpple', id: 11 },
            { name: 'Banan', id: 12 },
            { name: 'Kiwi', id: 13 },
            { name: 'Fläder', id: 14 },
            { name: 'Nektarin', id: 15 },
          ],
        },
      ]}
    >
      {(section: Section<Item>) => <ComboBoxSelection {...section} />}
    </ComboBox>
  )
}
