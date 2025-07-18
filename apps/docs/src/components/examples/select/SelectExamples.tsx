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

export const ControlledExample: React.FC<Partial<SelectProps>> = props => {
  const options = [
    { id: 'apelsin', name: 'Apelsin' },
    { id: 'banan', name: 'Banan' },
    { id: 'citron', name: 'Citron' },
    { id: 'dadel', name: 'Dadel' },
    { id: 'fikon', name: 'Fikon' },
  ]

  const [selectedFruit, setSelectedFruit] = React.useState<Selection>(new Set())

  const handleSelectionChange = (keys: Selection) => {
    if (keys === 'all') {
      return setSelectedFruit(new Set(options.map(({ id }) => id)))
    }
    return setSelectedFruit(keys)
  }

  return (
    <>
      <Select
        {...props}
        label='Favoritfrukt'
        description='Välj vilken du vill'
        placeholder='Välj en frukt'
        selectedKeys={selectedFruit}
        onSelectionChange={handleSelectionChange}
        options={options}
      />
      <pre>
        {props.selectionMode === 'multiple' ? (
          <>
            Selected fruit:{' '}
            {selectedFruit && Array.from(selectedFruit).join(', ')}
          </>
        ) : (
          <>Selected fruit: {selectedFruit}</>
        )}
      </pre>
    </>
  )
}

export const SectionedExample = () => {
  return (
    <Select
      label='Favoritfrukt eller grönsak'
      description='Välj vilken du vill'
      placeholder='Välj en frukt eller grönsak'
      selectionMode='multiple'
      options={[
        {
          name: 'Frukter',
          children: [
            { id: 'kiwi', name: 'Kiwi' },
            { id: 'banana', name: 'Banan' },
            { id: 'apple', name: 'Äpple' },
          ],
        },
        {
          name: 'Grönsaker',
          children: [
            { id: 'carrot', name: 'Morot' },
            { id: 'broccoli', name: 'Broccoli' },
          ],
        },
      ]}
    />
  )
}
