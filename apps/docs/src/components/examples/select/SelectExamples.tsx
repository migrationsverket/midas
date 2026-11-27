import React from 'react'
import {
  Select,
  ListBoxItem,
  ListBoxSection,
  ListBoxHeader,
} from '@midas-ds/components'

export const BasicExample = props => (
  <Select
    label='Favoritfrukt'
    {...props}
  >
    <ListBoxItem>Banan</ListBoxItem>
    <ListBoxItem>Apelsin</ListBoxItem>
    <ListBoxItem>Mango</ListBoxItem>
  </Select>
)

export const SectionedExample = () => {
  return (
    <Select label='Sectioned select'>
      <ListBoxSection>
        <ListBoxHeader>Fruit</ListBoxHeader>
        <ListBoxItem id='Apple'>Apple</ListBoxItem>
        <ListBoxItem id='Banana'>Banana</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection>
        <ListBoxHeader>Vegetables</ListBoxHeader>
        <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
        <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
      </ListBoxSection>
    </Select>
  )
}
