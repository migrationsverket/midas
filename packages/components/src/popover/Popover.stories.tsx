import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Save } from 'lucide-react'
import { Popover } from './Popover'
import { DialogTrigger } from 'react-aria-components'
import { Text } from '../text'
import { Button } from '../button'

type Story = StoryObj<typeof Popover>

export default {
  component: Popover,
  subcomponents: {
    DialogTrigger,
  },
  title: 'Components/Popover',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>

/**
 * Snapshot-only copy of a story with the popover open, since the visual tests
 * don't click the trigger. Hidden from the sidebar and docs. The screenshot is
 * cropped to the story's own element, so it's padded to fit the popover
 */
const open = (story: Story): Story => ({
  ...story,
  tags: ['!dev', '!autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          padding: '8rem 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: args => (
    <DialogTrigger defaultOpen>
      <Button
        variant='icon'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
  ),
})

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
    <DialogTrigger>
      <Button
        variant='icon'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Popover {...args} />
    </DialogTrigger>
  ),
}

export const Placement: Story = {
  args: {
    placement: 'top',
    children: 'Spara',
  },
  render: args => (
    <DialogTrigger>
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
    </DialogTrigger>
  ),
}

export const PrimaryOpen = open(Primary)

export const PlacementOpen = open(Placement)
