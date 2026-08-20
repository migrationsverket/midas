import { Select, ListBoxHeader, ListBoxItem, ListBoxSection } from '@midas-ds/components'

// Repro for the SelectAll fix: Banana starts pre-selected and disabled.
// "Select all" should add Apple/Cabbage/Broccoli without dropping Banana (4
// selected), and toggling it back off should clear those three but leave
// Banana selected — it has no way to have been deselected by the user.
export const SelectAllSectionsBugPage = () => (
  <div style={{ padding: 48, maxWidth: 320 }}>
    <Select
      label='Fruits and vegetables'
      selectionMode='multiple'
      isSelectableAll
      disabledKeys={['Banana']}
      defaultValue={['Banana']}
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
