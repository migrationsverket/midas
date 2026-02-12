import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import { Panel } from '.'
import { useState } from 'react'
import { Button } from '@midas-ds/components'
import * as navigationStories from '../navigation/Navigation.stories'

const { Primary: PrimaryNavigation } = composeStories(navigationStories)

type Story = StoryObj<typeof Panel>

export default {
  component: Panel,
  title: 'Components/Layout/Panel',
  tags: ['autodocs'],
  args: {
    isCollapsed: false,
    isOpen: false,
    title: 'App name',
  },
} satisfies Meta<typeof Panel>

export const Collapse: Story = {
  args: {
    isCollapsed: false,
    variant: 'collapse',
  },
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
      <Panel
        {...args}
        isCollapsed={isCollapsed}
        onCollapseChange={setIsCollapsed}
      >
        <PrimaryNavigation />
      </Panel>
    )
  },
}

export const Dismiss: Story = {
  args: {
    isOpen: true,
    variant: 'dismiss',
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
