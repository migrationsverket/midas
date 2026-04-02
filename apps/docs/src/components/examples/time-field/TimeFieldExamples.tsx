import React from 'react'
import { TimeField } from '@midas-ds/components'
import { Time } from '@internationalized/date'

export const TimeFieldControlled = () => {
  const [time, setTime] = React.useState<Time | null>(new Time(9, 0))
  return (
    <div className='card'>
      <TimeField
        label='Välj en tid'
        value={time}
        onChange={setTime}
      />
      <pre>Vald tid: {time?.toString()}</pre>
    </div>
  )
}
