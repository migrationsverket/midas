import {
  Button,
  ButtonGroup,
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
          Du måste bekräfta att du läst och accepterat villkoren innan du kan gå
          vidare
          <Button slot='close'>Bekräfta</Button>
        </Modal>
      </DialogTrigger>
    </div>
  )
}
