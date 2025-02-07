import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger } from './Tooltip'
import { Button } from '../button'
import { Save } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  argTypes: {}
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  args: {},
  render: () => (
    <TooltipTrigger>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip>Spara</Tooltip>
    </TooltipTrigger>
  )
}
