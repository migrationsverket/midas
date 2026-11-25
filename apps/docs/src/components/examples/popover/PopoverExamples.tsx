import {
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Popover,
  DialogTrigger,
  Text,
  TextField,
  Pressable,
} from '@midas-ds/components'
import { Info, UserCog } from 'lucide-react'
import React from 'react'

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
        label='Mejladress'
        description='Ange din mejladress för att få nyhetsbrev.'
        popover={{
          children: 'Vi kommer att skicka nyhetsbrev till den här adressen.',
        }}
      />
    </div>
  )
}
