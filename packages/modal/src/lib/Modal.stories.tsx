import type { Meta, StoryObj } from '@storybook/react'
import { DialogTrigger, Modal } from './Modal'
import { Button } from '@midas-ds/button'
import styles from './Modal.module.css'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <DialogTrigger>
        <Button>Öppna Modal</Button>
        <Modal>
          <h3>Vill du spara korrespondens?</h3>
          <p>AB Förekommer</p>
          <p>AC Förekommer ej</p>
          <p>i ärendenummer 12345678</p>
          <div className={styles.buttonContainer}>
            <Button size="small">Unsubscribe</Button>
            <Button
              variant="secondary"
              size="small"
            >
              Unsubscribe
            </Button>
          </div>
        </Modal>
      </DialogTrigger>
    )
  },
}
