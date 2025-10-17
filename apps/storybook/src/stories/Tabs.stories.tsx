import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent } from 'storybook/test'
import { Key } from 'react-aria-components'
import React from 'react'
import { Button, Tab, TabList, TabPanel, Tabs } from '@midas-ds/components'

type Story = StoryObj<typeof Tabs>

const data: {
  title: string
  content: React.ReactNode
  isDisabled?: boolean
}[] = [
  {
    title: 'Processen',
    content:
      'Processen går till såhär Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur maxime dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam? Vel?',
  },
  {
    title: 'Viktigt',
    content:
      'Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.',
  },
  {
    title: 'Ansök',
    content: (
      <>
        Ansök här: <Button>Ansök</Button>
      </>
    ),
  },
]

export default {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: args => (
    <Tabs {...args}>
      <TabList>
        {data.map(({ title, isDisabled }) => (
          <Tab
            id={title}
            isDisabled={isDisabled}
            key={title}
          >
            {title}
          </Tab>
        ))}
      </TabList>
      {data.map(({ title, content }) => (
        <TabPanel
          id={title}
          key={title}
        >
          <div>{content}</div>
        </TabPanel>
      ))}
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>

export const Primary: Story = {}

export const DisabledTabs: Story = {
  render: args => (
    <Tabs {...args}>
      <TabList>
        {data.map(({ title, isDisabled }, i) => (
          <Tab
            id={title}
            isDisabled={isDisabled || !!i}
            key={title}
          >
            {title}
          </Tab>
        ))}
      </TabList>
      {data.map(({ title, content }) => (
        <TabPanel
          id={title}
          key={title}
        >
          <div>{content}</div>
        </TabPanel>
      ))}
    </Tabs>
  ),
}

export const DefaultSelectedKey: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    defaultSelectedKey: 'Ansök',
  },
  play: async ({ canvas, step }) => {
    await step('the tab "Ansök" should be opened', async () => {
      await expect(canvas.getByRole('button')).toBeVisible()
    })
  },
}

export const SelectedKeyAndOnSelectionChange: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [selectedKey, setSelectedKey] = React.useState<Key>('Processen')
    return (
      <Tabs
        {...args}
        selectedKey={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <TabList>
          {data.map(({ title, isDisabled }) => (
            <Tab
              id={title}
              isDisabled={isDisabled}
              key={title}
            >
              {title}
            </Tab>
          ))}
        </TabList>
        {data.map(({ title, content }) => (
          <TabPanel
            id={title}
            key={title}
          >
            <div>{content}</div>
          </TabPanel>
        ))}
      </Tabs>
    )
  },
  play: async ({ canvas, step }) => {
    await step('the tab "Ansök" should be opened', async () => {
      await userEvent.click(await canvas.findByRole('tab', { name: 'Ansök' }))
      await expect(canvas.getByRole('button')).toBeVisible()
    })
  },
}

export const MoreItemsThanChildren: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <>
      <Tabs {...args}>
        <div>1</div>
      </Tabs>
      derp
    </>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'the page should still render even if the tabs component is misconfigured',
      async () => {
        await expect(canvas.getByText('derp')).toBeInTheDocument()
      },
    )
  },
}
