import {
  Button,
  ButtonGroup,
  DialogTrigger,
  Modal,
  Text,
} from '@midas-ds/components'

export const ConfirmationExample = () => (
  <DialogTrigger>
    <Button>Ta bort Kiwi</Button>
    <Modal title='Ta bort saker ur fruktkorgen'>
      <Text elementType='p'>
        Är du säker att du vill plocka bort "Kiwi" från fruktkorgen?
      </Text>
      <ButtonGroup>
        <Button slot='close'>Ja, ta bort</Button>
        <Button
          slot='close'
          variant='secondary'
        >
          Nej, ha kvar
        </Button>
      </ButtonGroup>
    </Modal>
  </DialogTrigger>
)
