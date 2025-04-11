import React from 'react'
import { Checkbox, CheckboxGroup } from '@midas-ds/components'

export const ControlledExample = () => {
  const [isSelected, setIsSelected] = React.useState(false)

  return (
    <>
      <Checkbox
        isSelected={isSelected}
        onChange={setIsSelected}
      >
        Jag godkänner villkoren
      </Checkbox>
      <pre>Du har{isSelected ? '' : ' inte'} godkänt villkoren</pre>
    </>
  )
}

export const ControlledGroupExample = () => {
  const [value, setValue] = React.useState<string[]>()

  return (
    <>
      <CheckboxGroup
        label='Favoritfrukt'
        value={value}
        onChange={setValue}
      >
        <Checkbox value='banan'>Banan</Checkbox>
        <Checkbox value='melon'>Melon</Checkbox>
        <Checkbox value='kiwi'>Kiwi</Checkbox>
        <Checkbox value='satsumas'>Satsumas</Checkbox>
      </CheckboxGroup>
      <pre>Valda alternativ: {value?.join(', ')}</pre>
    </>
  )
}
