import type { Meta, StoryObj } from '@storybook/react-vite'
import { MidasTooltipProps, Tooltip, TooltipTrigger } from './Tooltip'
import { Button } from '../button'
import { Save } from 'lucide-react'
import { expect, within } from 'storybook/test'
import styles from './Tooltip.module.css'
import { I18nProvider } from 'react-aria-components'

type Story = StoryObj<typeof Tooltip>

// Vitest runner ignores our  centered layout
// Here we make some space for the tooltip around the button
const Render = (args: MidasTooltipProps) => (
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
  play: async ({ step, args: { className }, canvasElement }) => {
    // Tooltip is outside of #storybook-root element
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByRole('tooltip')

    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(tooltip).toHaveClass(styles.tooltip, className as string)
      },
    )
  },
}

export const Placement: Story = {
  args: {
    placement: 'top',
    isOpen: true,
  },
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByRole('tooltip')

    await step('should be placed at the top', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'top')
    })
  },
}

export const PlacementStart: Story = {
  args: {
    placement: 'start',
    isOpen: true,
  },
  tags: ['!dev', '!autodocs'],
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByRole('tooltip')

    await step('should be placed at the start (left)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'left')
    })
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
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByRole('tooltip')

    await step('should be placed at the start for RTL (right)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'right')
    })
  },
}
