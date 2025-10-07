import React, { useState } from 'react'
import {
  TextField,
  Button,
  GlobalToastRegion,
  toastQueue,
  Spinner,
  Grid,
  GridItem,
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
      <Grid>
        <GlobalToastRegion />
        <GridItem size={12}>
          <TextField
            label='Ange ditt namn'
            description='Både för och efternamn'
          />
        </GridItem>
        <GridItem size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
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
        </GridItem>
      </Grid>
    </div>
  )
}
