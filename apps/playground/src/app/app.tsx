import { RacItem, RacSelect, Button } from '@midas-ds/components'
import { Form} from 'react-aria-components'
import '@midas-ds/components/default.css'

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <RacSelect
          label={'Label'}
          description={'Description'}
          onChange={x => {
            console.log('change', x)
          }}
        >
          <RacItem>Hello</RacItem>
          <RacItem>Goodbye</RacItem>
        </RacSelect>
        <RacSelect
          isInvalid
          selectionMode={'multiple'}
          errorMessage={'Error message'}
          label={'Label'}
          description={'Description'}
          onChange={x => {
            console.log('change', x)
          }}
        >
          <RacItem>Hello</RacItem>
          <RacItem>Banan</RacItem>
          <RacItem>Glass</RacItem>
          <RacItem>Äpple</RacItem>
          <RacItem>Gemini</RacItem>
          <RacItem>Gråsugga</RacItem>
          <RacItem>Valhaj</RacItem>
          <RacItem>Kladdkaka</RacItem>
          <RacItem>Dry Martini</RacItem>
        </RacSelect>
        <RacSelect
          isDisabled
          errorMessage={'Error message'}
          label={'Label'}
          description={'Description'}
          onChange={x => {
            console.log('change', x)
          }}
        >
          <RacItem>Hello</RacItem>
          <RacItem>Goodbye</RacItem>
        </RacSelect>
        <Form>
          <RacSelect
            isRequired
            label={'Required*'}
            description={'Description'}
          >
            <RacItem>Hello</RacItem>
            <RacItem>Goodbye</RacItem>
          </RacSelect>
          <Button type={'submit'}>submit</Button>
        </Form>

      </div>
    </>
  )
}
