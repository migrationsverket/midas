import React from 'react'
import type { Selection } from 'react-aria-components'
import { Select, SelectProps } from '@midas-ds/components'

export const BasicExample: React.FC<Partial<SelectProps>> = props => (
  <Select
    label='Favoritfrukt'
    description='Välj vilken du vill'
    placeholder='Välj en frukt'
    selectionMode='single'
    options={[
      { id: 'apelsin', name: 'Apelsin' },
      { id: 'banan', name: 'Banan' },
      { id: 'citron', name: 'Citron' },
      { id: 'dadel', name: 'Dadel' },
      { id: 'fikon', name: 'Fikon' },
    ]}
    {...props}
  />
)

export const ControlledExample = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['banan', 'dadel']),
  )

  console.log(selectedKeys)

  return (
    <Select
      label='Favoritfrukt'
      description='Välj vilken du vill'
      placeholder='Välj en frukt'
      selectionMode='single'
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      options={[
        { id: 'apelsin', name: 'Apelsin' },
        { id: 'banan', name: 'Banan' },
        { id: 'citron', name: 'Citron' },
        { id: 'dadel', name: 'Dadel' },
        { id: 'fikon', name: 'Fikon' },
      ]}
    />
  )
}
