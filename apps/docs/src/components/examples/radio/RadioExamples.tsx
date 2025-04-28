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
