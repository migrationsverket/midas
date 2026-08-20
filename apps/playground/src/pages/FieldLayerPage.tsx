import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  ColorSchemeSwitch,
  ComboBox,
  ListBoxItem,
  SearchField,
  Select,
  TextField,
} from '@midas-ds/components'

export function FieldLayerPage() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>Field layer tokens spike</h1>
        <ColorSchemeSwitch />
      </div>

      <p style={{ margin: 0 }}>
        Fields on the <strong>left</strong> sit directly on the page background and use{' '}
        <code>field-01</code>. Fields on the <strong>right</strong> are inside a{' '}
        <code>Card</code> — they should automatically pick up <code>field-02</code> via
        CSS variable cascade, with no extra props.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
        {/* Left: on page background */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ margin: 0, fontSize: '1rem' }}>On page background (field-01)</h2>
          <TextField label='Namn' placeholder='Anna Andersson' />
          <TextField label='E-post' type='email' placeholder='anna@example.com' />
          <SearchField placeholder='Sök...' />
          <Select label='Välj alternativ'>
            <ListBoxItem id='a'>Alternativ A</ListBoxItem>
            <ListBoxItem id='b'>Alternativ B</ListBoxItem>
            <ListBoxItem id='c'>Alternativ C</ListBoxItem>
          </Select>
          <ComboBox label='Kombinationsruta'>
            <ListBoxItem id='x'>Val X</ListBoxItem>
            <ListBoxItem id='y'>Val Y</ListBoxItem>
            <ListBoxItem id='z'>Val Z</ListBoxItem>
          </ComboBox>
          <Button type='submit'>Skicka</Button>
        </div>

        {/* Right: inside a Card */}
        <Card>
          <CardHeader>På Card-yta (field-02)</CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField label='Namn' placeholder='Anna Andersson' />
              <TextField label='E-post' type='email' placeholder='anna@example.com' />
              <SearchField placeholder='Sök...' />
              <Select label='Välj alternativ'>
                <ListBoxItem id='a'>Alternativ A</ListBoxItem>
                <ListBoxItem id='b'>Alternativ B</ListBoxItem>
                <ListBoxItem id='c'>Alternativ C</ListBoxItem>
              </Select>
              <ComboBox label='Kombinationsruta'>
                <ListBoxItem id='x'>Val X</ListBoxItem>
                <ListBoxItem id='y'>Val Y</ListBoxItem>
                <ListBoxItem id='z'>Val Z</ListBoxItem>
              </ComboBox>
              <Button type='submit'>Skicka</Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <h2 style={{ margin: 0, fontSize: '1rem' }}>Accordion (contained) — field-02</h2>
      <Accordion isContained>
        <AccordionItem
          id='form'
          title='Formulär i accordion'
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField label='Namn' placeholder='Anna Andersson' />
            <SearchField placeholder='Sök...' />
            <Select label='Välj alternativ'>
              <ListBoxItem id='a'>Alternativ A</ListBoxItem>
              <ListBoxItem id='b'>Alternativ B</ListBoxItem>
              <ListBoxItem id='c'>Alternativ C</ListBoxItem>
            </Select>
            <ComboBox label='Kombinationsruta'>
              <ListBoxItem id='x'>Val X</ListBoxItem>
              <ListBoxItem id='y'>Val Y</ListBoxItem>
              <ListBoxItem id='z'>Val Z</ListBoxItem>
            </ComboBox>
            <Button type='submit'>Skicka</Button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
