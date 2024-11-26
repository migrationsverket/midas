import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '@midas-ds/button'
import React from 'react'
import { Select, Item } from '@midas-ds/select'
import { Flex, FlexItem } from '@midas-ds/flex'

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
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
      <>
        <Button onPress={() => setIsOpen(true)}>Öppna</Button>
        <Modal
          id='modal'
          title='Välj ärende'
          isOpen={isOpen}
          onOpenChange={isOpen => setIsOpen(isOpen)}
        >
          <Flex fluid={true}>
            <FlexItem col={12}>
              <Select
                label='Ärenden'
                placeholder='Hej'
                description='Välj ärende'
                items={[{ id: 1, name: 'test' }]}
              >
                {item => <Item>{item.name}</Item>}
              </Select>
            </FlexItem>
            <FlexItem col={12}>
              <Button onPress={() => setIsOpen(false)}>Spara</Button>
            </FlexItem>
            <FlexItem col={12}>
              <Button
                variant='secondary'
                onPress={() => setIsOpen(false)}
              >
                Avbryt
              </Button>
            </FlexItem>
          </Flex>
        </Modal>
      </>
    )
  }
}
