import React, { useState, useEffect } from 'react'
import {
  TextField,
  Button,
  GlobalToastRegion,
  toastQueue,
  Spinner,
  Grid,
  GridItem,
  Skeleton,
} from '@midas-ds/components'
import '../custom.css'

export const ButtonLoadingExample = () => {
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

export const InlineSpinnerExample = () => {
  const [isChecking, setIsChecking] = useState(false)

  async function handleBlur() {
    setIsChecking(true)

    // Simulate an async database check
    await new Promise(resolve => setTimeout(resolve, 2500))

    setIsChecking(false)
  }

  return (
    <div className='card'>
      <Grid>
        <GridItem size={12}>
          <div className='field-and-spinner'>
            <TextField
              label='Ange ditt kortnummer'
              description='Ditt kortnummer kontrolleras mot databasen. Det kan ta en liten stund'
              onBlur={handleBlur}
            />
            <div className='spinner-box'>{isChecking && <Spinner small />}</div>
          </div>
        </GridItem>
        <GridItem size='auto'>
          <Button isDisabled={isChecking}>
            {isChecking ? 'Kontrollerar...' : 'Skicka'}
          </Button>
        </GridItem>
      </Grid>
    </div>
  )
}

export const SkeletonExample = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetch delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleReload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='card'>
      <Grid>
        {isLoading ? (
          <>
            <GridItem size={3}>
              <Skeleton
                width='100%'
                height='16px'
                isAnimated
              />
            </GridItem>
            <GridItem size={12}>
              <Skeleton
                width='100%'
                height='48px'
                isAnimated
              />
            </GridItem>
            <GridItem size={3}>
              <Skeleton
                width='100%'
                height='48px'
                isAnimated
              />
            </GridItem>
          </>
        ) : (
          <>
            <GridItem size={12}>
              <TextField label='Ange ditt namn' />
            </GridItem>
            <GridItem size={3}>
              <Button onPress={handleReload}>Ladda om</Button>
            </GridItem>
          </>
        )}
      </Grid>
    </div>
  )
}
