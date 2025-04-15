import React, { useState } from 'react'
import { RadioGroup, Radio } from '@midas-ds/components'

export const BasicExample: React.FC = () => (
  <RadioGroup
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
    defaultValue='apple'
  >
    <Radio value='apple'>Äpple</Radio>
    <Radio value='banan'>Banan</Radio>
  </RadioGroup>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = useState('banan')

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
      </RadioGroup>
      <div style={{ marginTop: '1rem' }}>selectedFruit: {selectedFruit}</div>
    </>
  )
}
