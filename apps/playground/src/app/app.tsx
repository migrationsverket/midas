import {TextField, Button, Spinner} from '@midas-ds/components'
import { tokenDictionary} from '@midas-ds/theme'
export default function App() {
  return (
    <>
      <h1>Hello world</h1>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <TextField label="Hello"/>
        <Spinner small color={tokenDictionary.button.background.primary.base.$value}/>
      </div>
      <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <Button>Klick <Spinner small/></Button>
      </div>
      <div>
        <Spinner/>
      </div>
    </>
  )
}
