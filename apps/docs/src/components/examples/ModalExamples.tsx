import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  DialogTrigger,
  Modal,
  Radio,
  RadioGroup,
  Text,
  TextField,
} from '@midas-ds/components'
import './custom.css'
import { Trash2 } from 'lucide-react'

export const ConfirmationExample = () => (
  <div
    className='card'
    style={{ display: 'block' }}
  >
    <DialogTrigger>
      <Button
        icon={Trash2}
        variant='tertiary'
      >
        Ta bort fruktkorgen
      </Button>
      <Modal title='Ta bort fruktkorg'>
        <Text elementType='p'>Är du säker att du ta bort din fruktkorg?</Text>
        <ButtonGroup>
          <Button
            variant='danger'
            slot='close'
          >
            Ja, ta bort
          </Button>
          <Button
            autoFocus
            slot='close'
            variant='secondary'
          >
            Nej, ha kvar
          </Button>
        </ButtonGroup>
      </Modal>
    </DialogTrigger>
  </div>
)

export const FormExample = () => (
  <div
    className='card'
    style={{ display: 'block' }}
  >
    <DialogTrigger>
      <Button>Gör din egen fruktkorg</Button>
      <Modal title='Gör din egen fruktkorg'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            autoFocus
            label='Namnge din fruktkorg'
            description='Skriv valfritt namn'
          />
          <RadioGroup
            defaultValue='ja'
            label='Vill du ha fruktkorgen hemskickad till din hemadress?'
          >
            <Radio value='ja'>Ja</Radio>
            <Radio value='nej'>Nej</Radio>
          </RadioGroup>
          <ButtonGroup>
            <Button slot='close'>Skicka</Button>
            <Button
              slot='close'
              variant='secondary'
            >
              Avbryt
            </Button>
          </ButtonGroup>
        </div>
      </Modal>
    </DialogTrigger>
  </div>
)

export const CustomCSSExample = () => (
  <div className='card'>
    <DialogTrigger>
      <Button>Open</Button>
      <Modal
        title='Modal Title'
        className='myModal'
      >
        <TextField
          label='Name'
          autoFocus
        />
      </Modal>
    </DialogTrigger>
  </div>
)

export const StickyFooterExample = () => {
  return (
    <div
      className='card'
      style={{ display: 'block' }}
    >
      <DialogTrigger>
        <Button>Beställ prenumeration</Button>
        <Modal
          title='Beställ fruktkorgsprenumeration'
          footer={
            <ButtonGroup>
              <Button slot='close'>Beställ</Button>
              <Button
                slot='close'
                variant='secondary'
              >
                Avbryt
              </Button>
            </ButtonGroup>
          }
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <TextField
              autoFocus
              label='Namn'
            />
            <TextField label='E-post' />
            <TextField label='Telefonnummer' />
            <TextField label='Leveransadress' />
            <TextField label='Postnummer' />
            <TextField label='Ort' />
            <TextField label='Extra leveransinstruktioner (valfritt)' />
            <RadioGroup
              defaultValue='vecka'
              label='Hur ofta vill du ha leverans?'
            >
              <Radio value='vecka'>Varje vecka</Radio>
              <Radio value='varannan'>Varannan vecka</Radio>
              <Radio value='manad'>En gång i månaden</Radio>
            </RadioGroup>
            <RadioGroup
              defaultValue='medium'
              label='Vilken storlek vill du ha på din fruktkorg?'
            >
              <Radio value='liten'>Liten</Radio>
              <Radio value='medium'>Medium</Radio>
              <Radio value='stor'>Stor</Radio>
            </RadioGroup>
            <CheckboxGroup label='Vilka frukter vill du ha i din korg?'>
              <Checkbox value='apple'>Äpple</Checkbox>
              <Checkbox value='banan'>Banan</Checkbox>
              <Checkbox value='apelsin'>Apelsin</Checkbox>
              <Checkbox value='vindruvor'>Vindruvor</Checkbox>
              <Checkbox value='paron'>Päron</Checkbox>
            </CheckboxGroup>
            <TextField label='Föredragen leveransdag' />
            <RadioGroup
              defaultValue='faktura'
              label='Betalningsmetod'
            >
              <Radio value='faktura'>Faktura</Radio>
              <Radio value='kort'>Kort</Radio>
              <Radio value='swish'>Swish</Radio>
            </RadioGroup>
            <TextField label='Meddelande till leveranspersonal (valfritt)' />
            <Checkbox value='terms'>Jag godkänner villkoren</Checkbox>
          </div>
        </Modal>
      </DialogTrigger>
    </div>
  )
}

export const HideCloseButtonExample = () => {
  return (
    <div className='card'>
      <DialogTrigger>
        <Button>Bekräfta att du läst villkoren</Button>
        <Modal
          title='Villkor'
          hideCloseButton
          isKeyboardDismissDisabled
        >
          Du måste bekräfta att du läst villkoren innan du kan gå vidare
          <Button slot='close'>Bekräfta</Button>
        </Modal>
      </DialogTrigger>
    </div>
  )
}
