import {
  ComboBox,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
  ListBoxLoadMoreItem,
} from '@midas-ds/components'
import React from 'react'
import { Collection, Key } from 'react-aria-components'
import { useAsyncList } from 'react-stately'

export const BasicExample: React.FC = () => (
  <ComboBox
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <ListBoxItem id='Lime'>Lime</ListBoxItem>
    <ListBoxItem id='Äpple'>Äpple</ListBoxItem>
    <ListBoxItem id='Banan'>Banan</ListBoxItem>
    <ListBoxItem id='Kiwi'>Kiwi</ListBoxItem>
    <ListBoxItem id='Apelsin'>Apelsin</ListBoxItem>
  </ComboBox>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<Key | null>(null)

  return (
    <>
      <ComboBox
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        selectedKey={selectedFruit}
        onSelectionChange={setSelectedFruit}
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
    >
      <Collection items={list.items}>
        {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
      {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
    </ComboBox>
  )
}
