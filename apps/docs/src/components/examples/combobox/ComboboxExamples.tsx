import { ComboBox, ComboBoxItem } from '@midas-ds/components'
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
