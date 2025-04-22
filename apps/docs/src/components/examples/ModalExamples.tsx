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

export const ConfirmationExample = () => (
  <DialogTrigger>
    <Button>Ta bort Kiwi</Button>
    <Modal title='Ta bort saker ur fruktkorgen'>
      <Text elementType='p'>
        Är du säker att du vill plocka bort "Kiwi" från fruktkorgen?
      </Text>
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
)

export const FormExample = () => (
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
)
