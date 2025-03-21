import styles from './app.module.css'
import React from 'react'
import { MidasModal, Button, DialogTrigger} from '@midas-ds/components'

export function App() {

  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div className={styles.container}>
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
        <MidasModal isDismissable title={'Modal Title'}>
          Any content here
          <Button
            onPress={() =>
              setOpen(p => {
                return !p
              })
            }
          >
            close btn within
          </Button>
        </MidasModal>
      </DialogTrigger>
    </div>
  )
}

export default App
