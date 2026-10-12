import { SearchField, InfoBanner, Button, Stack } from '@midas-ds/components'
import { useState } from 'react'

export const SimpleSearchExample = () => {
  const [value, setValue] = useState('')
  const [submittedValue, setSubmittedValue] = useState<string | null>(null)

  return (
    <div className='card'>
      <SearchField
        placeholder='Skriv in sökterm'
        value={value}
        onChange={setValue}
        onSubmit={setSubmittedValue}
      />

      {submittedValue && (
        <p>
          Du sökte på: <strong>{submittedValue}</strong>
        </p>
      )}
    </div>
  )
}

export const NoHitsExample = () => {
  return (
    <Stack
      spacing='medium'
      className='card'
    >
      <Stack direction='row'>
        <SearchField
          showButton={false}
          placeholder='Sök frukt'
        />
        <Button>Sök</Button>
      </Stack>
      <InfoBanner
        type='info'
        title='Sökningen gav inga träffar'
        message='Kontrollera stavningen och testa att ta bort filter om sådana är aktiva.'
      />
    </Stack>
  )
}
