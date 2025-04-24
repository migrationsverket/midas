import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger } from './Tooltip'
import { Button } from '../button'
import { Save } from 'lucide-react'
import { expect, within } from '@storybook/test'
import styles from './Tooltip.module.css'
import { I18nProvider } from 'react-aria-components'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  args: {
    children: 'Spara',
  },
  render: args => (
    <TooltipTrigger>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip {...args} />
    </TooltipTrigger>
  ),
}

export const Open: Story = {
  args: {
    className: 'test-class',
  },
  render: args => (
    <TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip
        data-testid='test'
        {...args}
      >
        Spara
      </Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ step, args: { className }, canvasElement }) => {
    // Tooltip is outside of #storybook-root element
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByTestId('test')

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
    children: 'Spara',
  },
  render: args => (
    <TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip
        data-testid='tooltip-placement'
        {...args}
      />
    </TooltipTrigger>
  ),
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByTestId('tooltip-placement')

    await step('should be placed at the top', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'top')
    })
  },
}

export const PlacementStart: Story = {
  args: {
    placement: 'start',
    children: 'Spara',
  },
  tags: ['!dev', '!autodocs'],
  render: args => (
    <TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip
        data-testid='tooltip-placement'
        {...args}
      />
    </TooltipTrigger>
  ),
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByTestId('tooltip-placement')

    await step('should be placed at the start (left)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'left')
    })
  },
}

export const PlacementStartRTL: Story = {
  args: {
    placement: 'start',
    children: 'Spara',
  },
  tags: ['!dev', '!autodocs'],
  render: args => (
    <I18nProvider locale={'ar-AR'}>
    <TooltipTrigger isOpen>
      <Button
        variant='tertiary'
        aria-label='Spara'
      >
        <Save />
      </Button>
      <Tooltip
        data-testid='tooltip-placement'
        {...args}
      />
    </TooltipTrigger>
    </I18nProvider>
  ),
  play: async ({ step, canvasElement }) => {
    const body = canvasElement.ownerDocument.body
    const tooltip = within(body).getByTestId('tooltip-placement')

    await step('should be placed at the start for RTL (right)', async () => {
      expect(tooltip).toHaveAttribute('data-placement', 'right')
    })
  },
}
