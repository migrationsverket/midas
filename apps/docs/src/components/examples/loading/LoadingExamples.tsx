import React, { useState } from 'react'
import {
  TextField,
  Button,
  GlobalToastRegion,
  toastQueue,
  Spinner,
} from '@midas-ds/components'

export const ButtonLoading = () => {
  const [isSubmitting, setSubmitting] = useState(false)

  async function handleSubmit() {
    setSubmitting(true)

    // Simulate a slow API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setSubmitting(false)

    // Show success toast
    toastQueue.add(
      { message: 'Formuläret skickades!', type: 'success' },
      { timeout: 5000 },
    )
  }
  return (
    <div className='card'>
      <GlobalToastRegion />
      <TextField
        label='Ange ditt namn'
        description='Både för och efternamn'
      />
      <Button onPress={handleSubmit}>
        {isSubmitting ? (
          <>
            <Spinner
              small
              isOnColor
            />
            Skickar...
          </>
        ) : (
          'Skicka'
        )}
      </Button>
    </div>
  )
}
