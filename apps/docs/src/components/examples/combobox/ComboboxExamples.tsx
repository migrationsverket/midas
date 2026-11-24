import {
  ComboBox,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
  ListBoxLoadMoreItem,
  ListBoxEmptyState,
  Collection,
  Key,
} from '@midas-ds/components'
import React, { useState } from 'react'
import { useAsyncList } from 'react-stately'

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<Key | null>(null)

  return (
    <>
      <ComboBox
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        value={selectedFruit}
        onChange={setSelectedFruit}
      >
        <ListBoxItem id='Lime'>Lime</ListBoxItem>
        <ListBoxItem id='Äpple'>Äpple</ListBoxItem>
        <ListBoxItem id='Banan'>Banan</ListBoxItem>
        <ListBoxItem id='Kiwi'>Kiwi</ListBoxItem>
        <ListBoxItem id='Apelsin'>Apelsin</ListBoxItem>
      </ComboBox>

      <pre style={{ marginTop: '1rem' }}>Vald frukt: {selectedFruit}</pre>
    </>
  )
}

const fruits = [
  { id: 'lime', name: 'Lime' },
  { id: 'apple', name: 'Äpple' },
  { id: 'banana', name: 'Banan' },
  { id: 'kiwi', name: 'Kiwi' },
  { id: 'orange', name: 'Apelsin' },
  { id: 'pear', name: 'Päron' },
  { id: 'mango', name: 'Mango' },
  { id: 'plum', name: 'Plommon' },
  { id: 'cherry', name: 'Körsbär' },
  { id: 'raspberry', name: 'Hallon' },
]

export const MultipleExample = () => (
  <ComboBox
    label='Välj dina favoritfrukter'
    description='Du kan välja flera'
    placeholder='Välj eller sök frukt'
    selectionMode='multiple'
    defaultValue={['banana', 'kiwi']}
    items={fruits}
  >
    {item => <ListBoxItem>{item.name}</ListBoxItem>}
  </ComboBox>
)

export const ControlledMultipleExample = () => {
  const [selectedFruits, setSelectedFruits] = useState<Key[]>(['banana'])

  return (
    <>
      <ComboBox
        label='Välj dina favoritfrukter'
        description='Du kan välja flera'
        placeholder='Välj eller sök frukt'
        selectionMode='multiple'
        value={selectedFruits}
        onChange={setSelectedFruits}
        items={fruits}
      >
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </ComboBox>

      <pre style={{ marginTop: '1rem' }}>
        Valda frukter: {selectedFruits.join(', ')}
      </pre>
    </>
  )
}

export const SectionedExample = () => {
  return (
    <ComboBox
      label='Välj din favoritfrukt eller grönsak'
      description='Du kan bara välja en'
      items={[
        {
          name: 'Grönsaker',
          children: [
            { name: 'Morot', id: 2 },
            { name: 'Broccoli', id: 3 },
            { name: 'Spenat', id: 4 },
            { name: 'Potatis', id: 5 },
            { name: 'Tomat', id: 6 },
          ],
        },
        {
          name: 'Frukter',
          children: [
            { name: 'Äpple', id: 11 },
            { name: 'Banan', id: 12 },
            { name: 'Kiwi', id: 13 },
            { name: 'Fläder', id: 14 },
            { name: 'Nektarin', id: 15 },
          ],
        },
      ]}
    >
      {section => (
        <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      )}
    </ComboBox>
  )
}

export const AsyncExample = () => {
  const list = useAsyncList<{ name: string }>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://')
      }

      const res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal },
      )

      const { results, next } = await res.json()

      return {
        items: results,
        cursor: next,
      }
    },
  })

  return (
    <ComboBox
      label='Star Wars Character Lookup'
      placeholder='Välj eller sök karaktär'
      description='Anropar ett externt API'
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      allowsEmptyCollection
      listBoxProps={{
        renderEmptyState: () =>
          list.isLoading ? null : (
            <ListBoxEmptyState>Inga träffar</ListBoxEmptyState>
          ),
      }}
    >
      <Collection items={list.items}>
        {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
      {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
    </ComboBox>
  )
}

export const ItemActionExample = () => {
  const [items, setItems] = useState([
    'Lime',
    'Äpple',
    'Banan',
    'Kiwi',
    'Apelsin',
  ])
  const [inputValue, setInputValue] = useState('')
  const selectedItem = items.includes(inputValue) ? inputValue : null

  const selectItem = (key: Key | null) => {
    if (key !== null) setInputValue(String(key))
  }

  const createItem = () => setItems(prev => [...prev, inputValue])

  return (
    <ComboBox
      label='Välj din favoritfrukt eller grönsak'
      description='Skapa en ny om den ej finns i listan'
      allowsEmptyCollection
      inputValue={inputValue}
      onInputChange={setInputValue}
      value={selectedItem}
      onChange={selectItem}
    >
      {inputValue.length > 0 && selectedItem === null && (
        <ListBoxItem onAction={createItem}>
          {`Skapa "${inputValue}"`}
        </ListBoxItem>
      )}
      {items.map(item => (
        <ListBoxItem
          key={item}
          id={item}
        >
          {item}
        </ListBoxItem>
      ))}
    </ComboBox>
  )
}
