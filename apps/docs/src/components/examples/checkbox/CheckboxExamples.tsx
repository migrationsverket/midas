import { Checkbox } from '@midas-ds/components'
import React, { useState } from 'react'

export const ControlledExample = () => {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <Checkbox
      isSelected={isChecked}
      onChange={(checked: boolean) => setIsChecked(checked)}
    >
      Jag godkänner villkoren
    </Checkbox>
  )
}
