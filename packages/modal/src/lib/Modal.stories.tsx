import type { Meta, StoryObj } from '@storybook/react'
import { DialogTrigger, Modal, ModalHeader, ModalBody } from './Modal'
import { Button } from '@midas-ds/button'
import { Flex, FlexItem } from '@midas-ds/flex'
import { TextArea } from '@midas-ds/textarea'
import { Heading } from 'react-aria-components'

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
    return (
      <DialogTrigger>
        <Button>Öppna modal</Button>
        <Modal>
          {({ close }) => (
            <>
              <ModalHeader />
              <ModalBody
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}
              >
                <Flex fluid={true}>
                  <FlexItem>
                    <Heading
                      slot='title'
                      style={{ margin: 0 }}
                    >
                      Vill du avsluta uppdraget?
                    </Heading>
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem>
                    <TextArea
                      // eslint-disable-next-line jsx-a11y/no-autofocus
                      autoFocus
                      label='Ange anledning'
                      description='Skriv anledning'
                      maxCharacters={100}
                    />
                  </FlexItem>
                </Flex>
                <Flex fluid={true}>
                  <FlexItem col='auto'>
                    <Button onPress={close}>Spara korrespondens</Button>
                  </FlexItem>
                  <FlexItem>
                    <Button
                      onPress={close}
                      variant='secondary'
                    >
                      Avbryt
                    </Button>
                  </FlexItem>
                </Flex>
              </ModalBody>
            </>
          )}
        </Modal>
      </DialogTrigger>
    )
  }
}
