import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '@midas-ds/components'
import { Sidebar } from './Sidebar'
import * as navigationStories from '../navigation/Navigation.stories'

type Story = StoryObj<typeof Sidebar>

const { Nested: NestedNavigation } = composeStories(navigationStories)

export default {
  component: Sidebar,
  title: 'Layout/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    rootElement: 'div',
  },
  args: {
    title: 'My app',
    children: <NestedNavigation />,
  },
} satisfies Meta<typeof Sidebar>

export const Primary: Story = {}

export const Collapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
}

export const Controlled: Story = {
  render: args => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <Button onPress={() => setIsCollapsed(c => !c)}>
          {isCollapsed ? 'Expandera' : 'Kollapsa'} sidebar
        </Button>
        <Sidebar
          {...args}
          isCollapsed={isCollapsed}
          onCollapseChange={setIsCollapsed}
        />
      </div>
    )
  },
}
