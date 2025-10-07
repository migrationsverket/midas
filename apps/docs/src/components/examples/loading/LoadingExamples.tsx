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
    }, 2500)
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
        <GridItem size={12}>
          {isLoading ? (
            <div className='skeleton-container'>
              <Skeleton
                width='20%'
                height='16px'
                isAnimated
              />
              <Skeleton
                width='100%'
                height='48px'
                isAnimated
              />
            </div>
          ) : (
            <TextField label='Ange ditt namn' />
          )}
        </GridItem>
        <GridItem size={3}>
          {isLoading ? (
            <Skeleton
              width='100%'
              height='48px'
              isAnimated
            />
          ) : (
            <Button onPress={handleReload}>Ladda om</Button>
          )}
        </GridItem>
      </Grid>
    </div>
  )
}

export const FullScreenLoadingExample = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)

    // Simulate async request
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  const loadForm = () => {
    setIsLoading(true)
    setShowForm(true)
    // Simulate async request
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  return (
    <div className='card'>
      {!showForm && <Button onPress={loadForm}>Ladda formulär</Button>}
      {/* Form*/}
      {showForm && !isLoading && (
        <Grid>
          <GridItem size={12}>
            <TextField label='Förnamn' />
          </GridItem>
          <GridItem size={12}>
            <TextField label='Efternamn' />
          </GridItem>
          <GridItem size={12}>
            <Button onPress={handleSubmit}>Ladda om</Button>
          </GridItem>
        </Grid>
      )}

      {/* Full screen loading overlay */}
      {isLoading && (
        <div className='overlay'>
          <div className='overlay-content'>
            <Spinner isOnColor />
          </div>
        </div>
      )}
    </div>
  )
}
