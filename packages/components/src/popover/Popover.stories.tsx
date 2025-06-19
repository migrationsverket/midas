import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger } from './Popover'
import { Button } from '../button'
import { Save } from 'lucide-react'
import { Text } from '../text'
import { Heading } from '../heading'

const meta: Meta<typeof Popover> = {
  component: Popover,
  subcomponents: {
    PopoverTrigger: PopoverTrigger as React.ComponentType<unknown>,
  },
  title: 'Components/Popover',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof Popover>

export const Primary: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Heading style={{ marginBottom: '0.5rem' }}>Info</Heading>
        <Text>Genom att spara detta går det ej att ta bort</Text>
      </div>
    ),
  },
  render: args => (
    <PopoverTrigger>
      <Button
        variant='icon'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Popover {...args} />
    </PopoverTrigger>
  ),
}

export const Placement: Story = {
  args: {
    placement: 'top',
    children: 'Spara',
  },
  render: args => (
    <PopoverTrigger>
      <Button
        variant='icon'
        aria-label='Spara'
        data-testid='popover-placement-trigger'
      >
        <Save />
      </Button>
      <Popover
        data-testid='popover-placement'
        {...args}
      />
    </PopoverTrigger>
  ),
}
