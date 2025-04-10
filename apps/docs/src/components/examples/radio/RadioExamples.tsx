import React, { useState } from 'react'
import { RadioGroup, Radio } from '@midas-ds/components'

const fruits = ['Äpple', 'Banan', 'Kiwi', 'Apelsin']

export const BasicExample: React.FC = () => (
  <RadioGroup
    label='Välj frukt'
    description='Du kan bara välja en'
    defaultValue={fruits[0]}
  >
    {fruits.slice(0, 4).map(fruit => (
      <Radio
        key={fruit}
        value={fruit}
      >
        {fruit}
      </Radio>
    ))}
  </RadioGroup>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = useState(fruits[2])

  return (
    <RadioGroup
      label='Välj frukt'
      description='Du kan bara välja en'
      value={selectedFruit}
      onChange={(value: string) => setSelectedFruit(value)}
    >
      {fruits.slice(0, 4).map(fruit => (
        <Radio
          key={fruit}
          value={fruit}
        >
          {fruit}
        </Radio>
      ))}
    </RadioGroup>
  )
}
