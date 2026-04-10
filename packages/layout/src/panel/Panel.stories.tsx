import { type Meta, type StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '@midas-ds/components'
import { Layout, LayoutContent } from '../layout'
import { Main } from '../main'
import { Panel } from '.'

type Story = StoryObj<typeof Panel>

export default {
  component: Panel,
  title: 'Layout/Panel',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  args: {
    title: 'App name',
  },
  decorators: [
    Story => (
      <Layout>
        <LayoutContent>
          <Story />
        </LayoutContent>
      </Layout>
    ),
  ],
} satisfies Meta<typeof Panel>

export const Primary: Story = {
  args: {
    defaultOpen: true,
  },
}

export const Controlled: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(true)

    return (
      <>
        <Main>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
        </Main>
        <Panel
          {...args}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
        />
      </>
    )
  },
}
