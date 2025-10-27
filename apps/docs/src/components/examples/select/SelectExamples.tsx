import React from 'react'
import { Collection, type Selection } from 'react-aria-components'
import { Select, MidasSelectProps, ListBoxItem } from '@midas-ds/components'

export const BasicExample = (props) => (
  <Select label='Favoritfrukt' {...props}>
    <ListBoxItem>Banan</ListBoxItem>
    <ListBoxItem>Apelsin</ListBoxItem>
    <ListBoxItem>Mango</ListBoxItem>
  </Select>
)

export const ControlledExample = () => {
  const options = [
    { id: 'apelsin', name: 'Apelsin' },
    { id: 'banan', name: 'Banan' },
    { id: 'citron', name: 'Citron' },
    { id: 'dadel', name: 'Dadel' },
    { id: 'fikon', name: 'Fikon' },
  ]

  const [selectedFruit, setSelectedFruit] = React.useState<string>('')

  const handleSelectionChange = (key: any) => {
    setSelectedFruit(key)
  }

  return (
    <>
      <Select
        label='Favoritfrukt'
        onChange={handleSelectionChange}
      >
        <Collection items={options}>
          {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
        </Collection>
      </Select>
      <pre>
        {`Selected fruit: ${selectedFruit }`}
      </pre>
    </>
  )
}

export const SectionedExample = () => {
  return (
<div>TODO</div>
  )
}
