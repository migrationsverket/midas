import { useState } from 'react'
import { Tooltip, TooltipTrigger, Button, Checkbox } from '@midas-ds/components'

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true)

  const handleButtonPress = () => {
    alert('Knappen är aktiv och du klickade på den!')
  }

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Checkbox
        isSelected={!isDisabled}
        onChange={selected => setIsDisabled(!selected)}
      >
        Enable button
      </Checkbox>

      {isDisabled ? (
        <TooltipTrigger>
          <Button
            variant='secondary'
            aria-label='Spara'
            aria-disabled={isDisabled}
            onPress={isDisabled ? undefined : handleButtonPress}
          >
            Hejsan
          </Button>
          <Tooltip>
            Du kan inte klicka på knappen när den inte är aktiverad
          </Tooltip>
        </TooltipTrigger>
      ) : (
        <Button
          variant='secondary'
          aria-label='Spara'
          aria-disabled={isDisabled}
          onPress={isDisabled ? undefined : handleButtonPress}
        >
          Hejsan
        </Button>
      )}
    </div>
  )
}
