import {
  Button,
  ButtonGroup,
  DialogTrigger,
  Modal,
  Text,
} from '@midas-ds/components'

export const ConfirmationExample = () => (
  <DialogTrigger>
    <Button variant='danger'>Ta bort Kiwi</Button>
    <Modal title='Ta bort saker ur fruktkorgen'>
      <Text elementType='p'>
        Är du säker att du vill plocka bort "Kiwi" från fruktkorgen?
      </Text>
      <ButtonGroup>
        <Button variant='secondary'>Nej, ha kvar</Button>
        <Button>Ja, ta bort</Button>
      </ButtonGroup>
    </Modal>
  </DialogTrigger>
)
