import React, { useState } from 'react'
import { Key } from 'react'
import {
  Button,
  Tooltip,
  TooltipTrigger,
  Select,
  ListBoxItem,
  Grid,
  GridItem,
  InfoBanner,
  TextField,
  Link,
} from '@midas-ds/components'
import { Form } from 'react-aria-components'

export const ButtonInfobannerExample = () => {
  const [value, setValue] = useState<Key | Key[] | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const isEnabled = value !== null

  const handleChange = (nextValue: Key | Key[] | null) => {
    setValue(nextValue)
    setShowBanner(false)
  }

  const handleButtonPress = () => {
    if (!isEnabled) {
      // show infobanner when user attempts to press while not enabled
      setShowBanner(true)
      return
    }

    // normal behaviour when enabled
    alert('Frukten lades till i din fruktkorg!')
  }

  return (
    <div className='card'>
      <Grid>
        {showBanner && (
          <GridItem>
            <InfoBanner
              type='info'
              message='Du har inte valt någon frukt att lägga till i fruktkorgen'
            />
          </GridItem>
        )}
        <GridItem size={12}>
          <Select
            label='Favoritfrukt'
            value={value}
            onChange={handleChange}
          >
            <ListBoxItem id='banan'>Banan</ListBoxItem>
            <ListBoxItem id='apelsin'>Apelsin</ListBoxItem>
            <ListBoxItem id='mango'>Mango</ListBoxItem>
          </Select>
        </GridItem>
        <GridItem size={4}>
          <Button
            variant='secondary'
            aria-label='Lägg till i fruktkorgen'
            aria-disabled={!isEnabled}
            onPress={handleButtonPress}
          >
            Lägg till i fruktkorgen
          </Button>
        </GridItem>
      </Grid>
    </div>
  )
}

export const InactiveButtonExample = () => {
  const [value, setValue] = useState<Key | Key[] | null>(null)

  const isEnabled = value !== null

  const handleChange = (nextValue: Key | Key[] | null) => {
    setValue(nextValue)
  }

  const handleButtonPress = () => {
    alert('Frukten lades till i din fruktkorg! ')
  }

  return (
    <div className='card'>
      <Grid>
        <GridItem size={12}>
          <Select
            label='Favoritfrukt'
            value={value}
            onChange={handleChange}
          >
            <ListBoxItem id='banan'>Banan</ListBoxItem>
            <ListBoxItem id='apelsin'>Apelsin</ListBoxItem>
            <ListBoxItem id='mango'>Mango</ListBoxItem>
          </Select>
        </GridItem>
        <GridItem size={4}>
          <TooltipTrigger>
            <Button
              variant='secondary'
              aria-label='Lägg till i fruktkorgen'
              aria-disabled={!isEnabled}
              onPress={isEnabled ? handleButtonPress : undefined}
            >
              Lägg till i fruktkorgen
            </Button>

            {!isEnabled && (
              <Tooltip>
                Du har inte valt någon frukt att lägga till i fruktkorgen
              </Tooltip>
            )}
          </TooltipTrigger>
        </GridItem>
      </Grid>
    </div>
  )
}

export const ErrorMessageListExample = () => {
  const [value, setValue] = useState<string>('')

  const [submitted, setSubmitted] = useState(false)
  const hasError = submitted && value.trim() === ''

  return (
    <div className='card'>
      <Form
        onSubmit={e => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <Grid>
          {hasError && (
            <GridItem size={12}>
              <InfoBanner type='warning'>
                Justera dessa fält:
                <li>
                  <Link href='#example-field'>Du måste ange ett förnamn</Link>
                </li>
              </InfoBanner>
            </GridItem>
          )}
          <GridItem size={12}>
            <TextField
              id='example-field'
              label='Ange ditt förnamn'
              isInvalid={hasError}
              errorMessage='Du måste ange ett förnamn'
              value={value}
              onChange={setValue}
            />
          </GridItem>
          <GridItem size={2}>
            <Button
              variant='primary'
              type='submit'
            >
              Skicka
            </Button>
          </GridItem>
        </Grid>
      </Form>
    </div>
  )
}
