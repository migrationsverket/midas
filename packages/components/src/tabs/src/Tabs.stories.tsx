import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { Button } from '@midas-ds/components'
import React from 'react'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    defaultSelected: 'Viktigt att veta',
    label: 'Följ processen',
    tabs: ['Processen', 'Viktigt att veta', 'Ansök'] as const
  },
  render: args => (
    <Tabs
      defaultSelected={args.defaultSelected}
      label={args.label}
      tabs={args.tabs}
    >
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
  )
}
