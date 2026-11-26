// Exposed to the host as remote/Widget. No default.css import here, and no
// providers: the host's I18nProvider and GlobalToastRegion apply, as long as
// Midas is shared.
import {
  Button,
  DatePicker,
  ListBoxItem,
  Select,
  toastQueue,
} from '@midas-ds/components'

export default function Widget() {
  return (
    <section
      style={{
        border: '1px dashed var(--midas-border-subtle-01)',
        padding: '1rem',
        display: 'grid',
        gap: '1rem',
        maxWidth: 420,
      }}
    >
      <strong>Från remoten</strong>
      {/* Follows the host's locale: åååå-mm-dd under sv-SE */}
      <DatePicker label='Datum' />
      {/* Opens inside the host's Modal */}
      <Select
        label='Välj'
        placeholder='Välj ett alternativ'
      >
        <ListBoxItem id='a'>Alfa</ListBoxItem>
        <ListBoxItem id='b'>Beta</ListBoxItem>
        <ListBoxItem id='c'>Gamma</ListBoxItem>
      </Select>
      {/* Shows up in the host's GlobalToastRegion */}
      <Button
        variant='secondary'
        onPress={() =>
          toastQueue.add({ message: 'Toast från remoten', type: 'success' })
        }
      >
        Visa toast
      </Button>
    </section>
  )
}
