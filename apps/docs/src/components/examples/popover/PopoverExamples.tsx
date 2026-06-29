import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Popover,
  DialogTrigger,
  Text,
  TextField,
  ButtonGroup,
} from '@midas-ds/components'
import { ArrowUp, ArrowLeft, Info, UserCog, Share2 } from 'lucide-react'
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
          variant='secondary'
          icon={Share2}
        >
          Dela
        </Button>
        <Popover>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div>
              <Heading>Dela inköpslista</Heading>
              <Text>Välj hur du vill dela din inköpslista</Text>
            </div>
            <ButtonGroup>
              <Button>Maila</Button>
              <Button variant='secondary'>Kopiera texten</Button>
            </ButtonGroup>
          </div>
        </Popover>
      </DialogTrigger>
    </div>
  )
}

export const InfoPopoverExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Text>Hemkatalog</Text>
        <DialogTrigger>
          <Pressable>
            <Info
              size={20}
              aria-label='Mer information om hemkatalogen'
            />
          </Pressable>
          <Popover>
            <Heading>Hemkatalog</Heading>
            <Text>
              I din hemkatalog kan du spara filer och dokument som du vill ha
              snabb åtkomst till. Det är en bra plats att organisera dina
              viktiga filer och hålla dem lättillgängliga.
            </Text>
          </Popover>
        </DialogTrigger>
      </div>
    </div>
  )
}

export const PopoverFormExample = () => {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <DialogTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
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
          <Button
            style={{ marginTop: '1rem' }}
            onPress={() => setOpen(false)}
          >
            Spara
          </Button>
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
