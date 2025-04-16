import React from 'react'
import { RangeCalendar } from '@midas-ds/components'
import { DateValue } from 'react-aria-components'

export const RangeCalendarExample = () => {
  const [selected, setSelected] = React.useState<{
    start: DateValue
    end: DateValue
  } | null>(null)

  return (
    <>
      <RangeCalendar
        value={selected}
        onChange={setSelected}
      />
      <pre style={{ marginTop: '1rem' }}>
        Valda datum:{' '}
        {selected &&
          `${selected?.start.toString()} till: ${selected?.end.toString()}`}
      </pre>
    </>
  )
}
