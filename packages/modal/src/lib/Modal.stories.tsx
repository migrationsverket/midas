import type { Meta, StoryObj } from '@storybook/react'
import { DialogTrigger, Modal } from './Modal'
import { Button } from '@midas-ds/button'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}
export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
  render: () => {
    const buttonContainerStyle = {
      display: 'flex',
      gap: '0.8rem'
    }
    const divStyle = {
      marginBottom: '1.875rem'
    }
    return (
      <DialogTrigger>
        <Button>Öppna Modal</Button>
        <Modal>
          <h3>Vill du spara korrespondens?</h3>
          <div style={divStyle}>
            <p>AB Förekommer</p>
            <p>AC Förekommer ej</p>
          </div>

          <p>i ärendenummer 12345678</p>
          <div style={buttonContainerStyle}>
            <Button>Spara korr.</Button>
            <Button variant='secondary'>Avbrytt</Button>
          </div>
        </Modal>
      </DialogTrigger>
    )
  }
}
