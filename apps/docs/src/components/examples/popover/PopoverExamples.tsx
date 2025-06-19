import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Popover,
  PopoverTrigger,
  Text,
  TextField,
} from '@midas-ds/components'
import { ArrowUp, ArrowLeft, Save, Laptop, UserCog } from 'lucide-react'
import React from 'react'
import { Pressable } from 'react-aria-components'

export const PopoverExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <PopoverTrigger>
        <Button
          variant='icon'
          aria-label='Spara'
        >
          <Save />
        </Button>
        <Popover>Spara</Popover>
      </PopoverTrigger>
    </div>
  )
}

export const PopoverTextExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <PopoverTrigger>
        <Button
          variant='icon'
          aria-label='Din dator'
        >
          <Laptop />
        </Button>
        <Popover>
          <Heading>Hårddiskutrymme</Heading>
          <Text>Din dator har 150gb kvar i hemkatalogen.</Text>
        </Popover>
      </PopoverTrigger>
    </div>
  )
}

export const PopoverFormExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <PopoverTrigger>
        <Button
          variant='icon'
          aria-label='Tillgänglighetsinställningar'
        >
          <UserCog />
        </Button>
        <Popover>
          <CheckboxGroup
            description='Justera inställningar för att förbättra din användarupplevelse.'
            label='Tillgänglighetsinställningar'
          >
            <Checkbox value='compact'>Kompakt läge</Checkbox>
            <Checkbox value='animations'>Animationer</Checkbox>
            <Checkbox value='contrast'>Högkontrastläge</Checkbox>
            <Checkbox value='dark-mode'>Mörkt läge</Checkbox>
          </CheckboxGroup>
        </Popover>
      </PopoverTrigger>
    </div>
  )
}

export const PopoverPlacement = () => {
  return (
    <div
      className='card'
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '1rem',
      }}
    >
      <PopoverTrigger>
        <Button>
          <ArrowLeft />
        </Button>
        <Popover placement='left'>
          Popover visas till vänster om trigger-elementet
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button>
          <ArrowUp />
        </Button>
        <Popover placement='top'>
          Popover visas på ovansidan av trigger-elementet
        </Popover>
      </PopoverTrigger>
    </div>
  )
}

export const ControlledPopover = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <>
      <PopoverTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Button>Klicka på mig</Button>
        <Popover>
          Enligt botanisk definition räknas bananer faktiskt som bär, medan
          jordgubbar inte gör det.
        </Popover>
      </PopoverTrigger>
      <pre>Popover {isOpen ? 'visas' : 'visas inte'}</pre>
    </>
  )
}

export const CustomTriggerPopover = () => {
  return (
    <PopoverTrigger>
      <Pressable>
        <span role='button'>Trigger</span>
      </Pressable>
      <Popover>
        Med hjälp av Pressable kan vilket element som helst bli en trigger!
      </Popover>
    </PopoverTrigger>
  )
}

export const PopoverContentExample = () => {
  return (
    <div className='card'>
      <TextField
        label='E-post'
        description='Ange din e-postadress för att få nyhetsbrev.'
        popoverContent='Vi skickar ut nyhetsbrev med information om nya funktioner, uppdateringar och tips.'
      />
    </div>
  )
}
