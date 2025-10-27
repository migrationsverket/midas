import { ListBoxItem, Select, Button } from '@midas-ds/components'
import { Form } from 'react-aria-components'
import '@midas-ds/components/default.css'

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <Select
        label='Label'
        description='Description'
        onChange={x => {
          console.log('change', x)
        }}
      >
        <ListBoxItem>
          Very long string that goes on for a long time Very long string that
          goes on for a long timeVery long string that goes on for a long
          time{' '}
        </ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </Select>
      <Select
        isInvalid
        selectionMode='multiple'
        errorMessage='Error message'
        label='Label'
        description='Description'
        onChange={x => {
          console.log('change', x)
        }}
      >
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Banan</ListBoxItem>
        <ListBoxItem>Glass</ListBoxItem>
        <ListBoxItem>Äpple</ListBoxItem>
        <ListBoxItem>
          Gemini GEMINI GEMINI GEMINI GEMINI Gemini GEMINI GEMINI GEMINI GEMINI
          GEMINI GEMINI GEMINI GEMINI Gemini GEMINI GEMINI GEMINI GEMINI
        </ListBoxItem>
        <ListBoxItem>Gråsugga</ListBoxItem>
        <ListBoxItem>Valhaj</ListBoxItem>
        <ListBoxItem>Kladdkaka</ListBoxItem>
        <ListBoxItem>Dry Martini</ListBoxItem>
      </Select>
      <Select
        isDisabled
        errorMessage='Error message'
        label='Label'
        description='Description'
        onChange={x => {
          console.log('change', x)
        }}
      >
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </Select>
      <Select
        showTags
        selectionMode='multiple'
        errorMessage='Error message'
        label='Show me the tags'
        description='Description'
        onChange={x => {
          console.log('change', x)
        }}
      >
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </Select>
      <Form>
        <Select
          isRequired
          label='Required*'
          description='Description'
        >
          <ListBoxItem>Hello</ListBoxItem>
          <ListBoxItem>Goodbye</ListBoxItem>
        </Select>
        <Button type='submit'>submit</Button>
      </Form>
    </div>
  )
}
