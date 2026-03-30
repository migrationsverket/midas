import { type Meta, type StoryObj } from '@storybook/react-vite'
import { Panel } from '.'
import { useState } from 'react'
import { Button } from '@midas-ds/components'

type Story = StoryObj<typeof Panel>

export default {
  component: Panel,
  title: 'Components/Layout/Panel',
  tags: ['autodocs'],
  args: {
    isOpen: false,
    title: 'App name',
  },
} satisfies Meta<typeof Panel>

export const Primary: Story = {
  args: {
    isOpen: true,
    title: 'Plats',
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
      <Panel
        {...args}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    ) : (
      <Button onPress={() => setIsOpen(true)}>Re open</Button>
    )
  },
}
