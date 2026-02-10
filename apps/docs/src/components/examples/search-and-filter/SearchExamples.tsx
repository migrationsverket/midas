import { SearchField } from '@midas-ds/components'
import { useState } from 'react'
import { options } from '@midas-ds/test-utils'

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
