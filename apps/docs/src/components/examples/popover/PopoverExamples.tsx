import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Popover,
  DialogTrigger,
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
      <DialogTrigger>
        <Button
          variant='icon'
          aria-label='Spara'
        >
          <Save />
        </Button>
        <Popover>Spara</Popover>
      </DialogTrigger>
    </div>
  )
}

export const PopoverTextExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <DialogTrigger>
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
      </DialogTrigger>
    </div>
  )
}

export const PopoverFormExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <DialogTrigger>
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
      </DialogTrigger>
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
      <DialogTrigger>
        <Button>
          <ArrowLeft />
        </Button>
        <Popover placement='left'>
          Popover visas till vänster om trigger-elementet
        </Popover>
      </DialogTrigger>
      <DialogTrigger>
        <Button>
          <ArrowUp />
        </Button>
        <Popover placement='top'>
          Popover visas på ovansidan av trigger-elementet
        </Popover>
      </DialogTrigger>
    </div>
  )
}

export const ControlledPopover = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <>
      <DialogTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Button>Klicka på mig</Button>
        <Popover>
          Enligt botanisk definition räknas bananer faktiskt som bär, medan
          jordgubbar inte gör det.
        </Popover>
      </DialogTrigger>
      <pre>Popover {isOpen ? 'visas' : 'visas inte'}</pre>
    </>
  )
}

export const CustomTriggerPopover = () => {
  return (
    <DialogTrigger>
      <Pressable>
        <span role='button'>Trigger</span>
      </Pressable>
      <Popover>
        Med hjälp av Pressable kan vilket element som helst bli en trigger!
      </Popover>
    </DialogTrigger>
  )
}

export const PopoverContentExample = () => {
  return (
    <div className='card'>
      <TextField
        label='E-post'
        description='Ange din e-postadress för att få nyhetsbrev.'
        popover={{
          children: 'Vi kommer att skicka nyhetsbrev till den här adressen.',
        }}
      />
    </div>
  )
}
