import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from '@midas-ds/components'
import { expect } from 'storybook/test'

type Story = StoryObj<typeof ProgressBar>

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  tags: ['autodocs'],
  args: {
    isIndeterminate: false,
  },
}

export const Primary: Story = {
  args: {
    label: 'Loading...',
    showValueLabel: true,
    value: 33,
    minValue: 0,
    maxValue: 100,
  },
  play: async ({ canvas, args, step }) => {
    await step(
      'it should provide an information about the progress for screen readers',
      async () => {
        const progressBar = canvas.getByRole('progressbar')
        expect(progressBar).toHaveAttribute('aria-valuemin', `${args.minValue}`)
        expect(progressBar).toHaveAttribute('aria-valuemax', `${args.maxValue}`)
        expect(progressBar).toHaveAttribute('aria-valuenow', `${args.value}`)
        expect(progressBar).toHaveAttribute(
          'aria-valuetext',
          expect.stringMatching(new RegExp(`${args.value}`)),
        )
      },
    )
  },
}

export const WithoutLabels: Story = {
  args: {
    value: 66,
    'aria-label': 'Loading...',
  },
  play: async ({ canvas, args, step }) => {
    await step(
      'it should provide an accessible label for screen readers',
      async () => {
        expect(
          canvas.getByLabelText(args['aria-label'] as string),
        ).toBeInTheDocument()
      },
    )
  },
}

export const IsIndeterminate: Story = {
  tags: ['!snapshot'],
  args: {
    isIndeterminate: true,
    label: 'Waiting...',
  },
  play: async ({ canvas, step }) => {
    await step('it should not have an aria-valuenow property', async () => {
      expect(canvas.getByRole('progressbar')).not.toHaveProperty(
        'aria-valuenow',
      )
    })
  },
}

export default meta
