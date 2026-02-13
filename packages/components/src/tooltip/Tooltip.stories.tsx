import type { Meta, StoryObj } from '@storybook/react-vite'
import { Save } from 'lucide-react'
import { I18nProvider } from 'react-aria-components'
import { type TooltipProps, Tooltip, TooltipTrigger } from './Tooltip'
import { Button } from '../button'

type Story = StoryObj<typeof Tooltip>

// Vitest runner ignores our  centered layout
// Here we make some space for the tooltip around the button
const Render = (args: TooltipProps) => (
  <div
    style={{
      padding: '5rem',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <TooltipTrigger isOpen={args.isOpen}>
      <Button
        variant='icon'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
  </div>
)

export default {
  component: Tooltip,
  subcomponents: {
    TooltipTrigger: TooltipTrigger as React.ComponentType<unknown>,
  },
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    // violations in forced-colors
    a11y: { test: 'todo' },
  },
  args: {
    children: 'Spara',
  },
  render: Render,
} satisfies Meta<typeof Tooltip>

export const Primary: Story = {}

export const Open: Story = {
  args: {
    className: 'test-class',
    isOpen: true,
  },
}

export const Placement: Story = {
  args: {
    placement: 'top',
    isOpen: true,
  },
}

export const PlacementStartRTL: Story = {
  args: {
    placement: 'start',
    isOpen: true,
  },
  tags: ['!dev', '!autodocs'],
  render: args => (
    <I18nProvider locale='ar-AR'>
      <Render {...args} />
    </I18nProvider>
  ),
}
