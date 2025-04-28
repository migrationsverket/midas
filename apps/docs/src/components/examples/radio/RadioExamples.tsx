import React, { useState } from 'react'
import { RadioGroup, Radio } from '@midas-ds/components'

export const BasicExample: React.FC = () => (
  <RadioGroup
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <Radio value='apple'>Äpple</Radio>
    <Radio value='banan'>Banan</Radio>
    <Radio value='kiwi'>Kiwi</Radio>
    <Radio value='apelsin'>Apelsin</Radio>
  </RadioGroup>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = useState('')

  return (
    <>
      <RadioGroup
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        value={selectedFruit}
        onChange={setSelectedFruit}
      >
        <Radio value='apple'>Äpple</Radio>
        <Radio value='banan'>Banan</Radio>
        <Radio value='kiwi'>Kiwi</Radio>
        <Radio value='apelsin'>Apelsin</Radio>
      </RadioGroup>
      <div style={{ marginTop: '1rem' }}>selectedFruit: {selectedFruit}</div>
    </>
  )
}

export const HorizontalExample = () => (
  <RadioGroup
    label='Välj din favoritfrukt'
    description='Max 2 val vid horisontellt läge'
    orientation='horizontal'
  >
    <Radio value='apple'>Äpple</Radio>
    <Radio value='banan'>Banan</Radio>
  </RadioGroup>
)

export const DefaultValueExample = () => (
  <RadioGroup
    label='Vill du lägga till din favoritfrukt i fruktkorgen?'
    description='Det blir gott!'
    defaultValue='yes'
  >
    <Radio value='yes'>Ja</Radio>
    <Radio value='no'>Nej</Radio>
  </RadioGroup>
)

export const NoneOfTheAboveExample = () => (
  <RadioGroup
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <Radio value='apple'>Äpple</Radio>
    <Radio value='banan'>Banan</Radio>
    <Radio value='kiwi'>Kiwi</Radio>
    <Radio value='apelsin'>Apelsin</Radio>
    <Radio value='none'>Inget av givna alternativ</Radio>
  </RadioGroup>
)
