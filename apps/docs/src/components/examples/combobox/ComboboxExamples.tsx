import { ComboBox, ComboBoxItem } from '@midas-ds/components'
import React, { useState } from 'react'

export const BasicExample: React.FC = () => (
  <ComboBox
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <ComboBoxItem key='Äpple'>Äpple</ComboBoxItem>
    <ComboBoxItem key='Banan'>Banan</ComboBoxItem>
    <ComboBoxItem key='Kiwi'>Kiwi</ComboBoxItem>
    <ComboBoxItem key='Apelsin'>Apelsin</ComboBoxItem>
  </ComboBox>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = useState<string>('Kiwi')

  return (
    <>
      <ComboBox
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        placeholder={selectedFruit}
        onSelectionChange={key => {
          console.log('Selected key:', key as string)
          setSelectedFruit(key as string)
        }}
      >
        <ComboBoxItem
          key='Äpple'
          textValue='Äpple'
        >
          Äpple
        </ComboBoxItem>
        <ComboBoxItem
          key='Banan'
          textValue='Banan'
        >
          Banan
        </ComboBoxItem>
        <ComboBoxItem
          key='Kiwi'
          textValue='Kiwi'
        >
          Kiwi
        </ComboBoxItem>
        <ComboBoxItem
          key='Apelsin'
          textValue='Apelsin'
        >
          Apelsin
        </ComboBoxItem>
      </ComboBox>

      <div style={{ marginTop: '1rem' }}>selectedFruit: {selectedFruit}</div>
    </>
  )
}
