import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { Button } from '../button'
import { expect, userEvent } from '@storybook/test'
import { Key } from 'react-aria-components'
import React from 'react'

type Story = StoryObj<typeof Tabs>

export default {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: args => (
    <Tabs {...args}>
      <div>
        Processen går till såhär Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
        maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
        Eveniet reprehenderit sapiente quidem culpa nam? Vel?
      </div>
      <div>
        Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error
        nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti
        consequatur nam culpa nesciunt cupiditate autem suscipit.
      </div>
      <div>
        Ansök här: <Button>Ansök</Button>
      </div>
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
      await userEvent.click(canvas.getByRole('tab', { name: 'Ansök' }))
      await expect(canvas.getByRole('button')).toBeVisible()
    })
  },
}

export const MoreItemsThanChildren: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    tabs: ['1', '2'],
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

export const DifferentCasedTabs: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    tabs: ['TEST', 'test'],
  },
  render: args => (
    <Tabs {...args}>
      <div>uppercase</div>
      <div>lowercase</div>
    </Tabs>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should be possible to have the same word in different cases as tab titles',
      async () => {
        await expect(canvas.getByText('uppercase')).toBeVisible()
        await userEvent.click(canvas.getByText('test'))
        await expect(canvas.getByText('lowercase')).toBeVisible()
      },
    )
  },
}
