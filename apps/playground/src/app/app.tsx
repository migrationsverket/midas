import styles from './app.module.css'
import React from 'react'
import { Modal, Button, DialogTrigger, FlexItem, ModalTrigger, Dialog, Flex, TextField } from '@midas-ds/components'

export function App() {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div className={styles.container}>

      ----- UNCONTROLLED MODAL ----
      <DialogTrigger>
        <Button>Uncontrolled (any button in here with pressable element)</Button>
        <Modal title={'Uncontrolled'}>
          Any content within uncontrolled mode.
        </Modal>
      </DialogTrigger>
      ----- CONTROLLED MODAL ----
      <Button
        onPress={() => setOpen(true)}
        variant={'secondary'}
      >
        open modal from outside trigger
      </Button>
      <DialogTrigger
        isOpen={open}
        onOpenChange={setOpen}
      >
        <Modal
          isDismissable
          title={'Modal Title'}
        >
          Any content here
          <TextField label={'Name'} autoFocus></TextField>
          <Button
            onPress={() =>
              setOpen(p => {
                return !p
              })
            }
          >
            close btn within
          </Button>
        </Modal>
      </DialogTrigger>
      ----- LEGACY MODAL -----
      <ModalTrigger
        label={'Radera frukter'}
        isDismissable={true}
      >
        {close => (
          <Dialog title='Vill du radera alla frukter?'>
            <p>Är du säker? De går inte att återskapa.</p>
            <Flex fluid={true}>
              <FlexItem col='auto'>
                <Button
                  variant={'danger'}
                  onPress={close}
                >
                  Radera frukter
                </Button>
              </FlexItem>
              <FlexItem col='auto'>
                <Button
                  variant={'secondary'}
                  onPress={close}
                >
                  Avbryt
                </Button>
              </FlexItem>
            </Flex>
          </Dialog>
        )}
      </ModalTrigger>
    </div>
  )
}

export default App
