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
} from '@midas-ds/components'

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
        <GridItem>
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
        <GridItem>
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
