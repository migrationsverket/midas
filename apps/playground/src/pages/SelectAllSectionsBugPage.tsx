import { Select, ListBoxHeader, ListBoxItem, ListBoxSection } from '@midas-ds/components'

// Repro for the SelectAll bug: click "Select all" and the count reads "8 selected"
// instead of "3" — Apple, Cabbage, Broccoli are the only real, selectable items
// (Banana is disabled, and the two section + two header nodes aren't items at all).
export const SelectAllSectionsBugPage = () => (
  <div style={{ padding: 48, maxWidth: 320 }}>
    <Select
      label='Fruits and vegetables'
      selectionMode='multiple'
      isSelectableAll
      disabledKeys={['Banana']}
    >
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
  </div>
)
