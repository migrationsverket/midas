import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { Button } from '../button'
import { expect, userEvent } from '@storybook/test'
import { Key } from 'react-aria-components'
import React from 'react'
import { TabList } from './TabList'
import { Tab } from './Tab'
import { TabPanel } from './TabPanel'

type Story = StoryObj<typeof Tabs>

export default {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: args => (
    <Tabs {...args}>
      <TabList>
        <Tab id='processen'>Processen</Tab>
        <Tab id='viktigt'>Viktigt att veta</Tab>
        <Tab id='ansok'>Ansök</Tab>
      </TabList>

      <TabPanel id='processen'>
        <div>
          Processen går till såhär Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
          maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
          Eveniet reprehenderit sapiente quidem culpa nam? Vel?
        </div>
      </TabPanel>

      <TabPanel id='viktigt'>
        <div>
          Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error
          nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti
          consequatur nam culpa nesciunt cupiditate autem suscipit.
        </div>
      </TabPanel>

      <TabPanel id='ansok'>
        <div>
          Ansök här: <Button>Ansök</Button>
        </div>
      </TabPanel>
    </Tabs>
  ),
  args: {
    label: 'Följ processen',
    tabs: ['Processen', 'Viktigt att veta', 'Ansök'],
  },
} as Meta<typeof Tabs>

export const Primary: Story = {}

export const DefaultSelectedKey: Story = {
  tags: ['!dev', '!autodocs'],
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
  tags: ['!dev', '!autodocs'],
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
        <div></div>
        <div></div>
        <div>
          <Button>Ansök</Button>
        </div>
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
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {},
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
