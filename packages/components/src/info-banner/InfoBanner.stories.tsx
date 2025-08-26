import type { Meta, StoryObj } from '@storybook/react'
import { InfoBanner } from './InfoBanner'
import React from 'react'
import { expect, fn, userEvent } from '@storybook/test'
import { Button } from '../button'

type Story = StoryObj<typeof InfoBanner>

export default {
  component: InfoBanner,
  title: 'Components/InfoBanner',
  tags: ['autodocs'],
} satisfies Meta<typeof InfoBanner>

export const Success: Story = {
  args: {
    title: 'Thank you!',
    message:
      'You are now done sharing all passports - alternatively you have \n' +
      '        submitted a reply that you were not able or willing to share.\n' +
      '          \n' +
      '        You can close the e-service. We will contact you if we need more\n' +
      '        information. You will hear from us when we have made a decision.',
    type: 'success',
  },
}

export const Warning: Story = {
  args: {
    title: 'Varning',
    message: `Warning message
    with
    line
    breaks
    `,
    type: 'warning',
  },
}

export const Info: Story = {
  args: {
    title: 'Information',
    message:
      'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info',
  },
}

export const Important: Story = {
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important',
  },
}

export const Dismissable: Story = {
  args: {
    title: 'Thank you!',
    message:
      'You are now done sharing all passports - alternatively you have \n' +
      '        submitted a reply that you were not able or willing to share.\n' +
      '          \n' +
      '        You can close the e-service. We will contact you if we need more\n' +
      '        information. You will hear from us when we have made a decision.',
    type: 'success',
    isDismissable: true,
  },
}

export const DismissableTests: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Dismissable.args,
    onOpenChange: fn(),
  },
  play: async ({ canvas, step, args }) => {
    await step('it should fire the onOpenChange event and close', async () => {
      const closeButton = canvas.getByRole('button')
      await userEvent.click(closeButton)
      await expect(args.onOpenChange).toHaveBeenCalledOnce()
      await expect(closeButton).not.toBeVisible()
    })
  },
}

export const Controlled: Story = {
  args: {
    ...Dismissable.args,
    onOpenChange: fn(),
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <>
        <InfoBanner
          {...args}
          isOpen={isOpen}
          onOpenChange={newOpen => {
            setIsOpen(newOpen)
            args.onOpenChange?.(newOpen)
          }}
        />
        {!isOpen && (
          <Button
            autoFocus
            onPress={() => setIsOpen(true)}
          >
            Open
          </Button>
        )}
      </>
    )
  },
}

export const ControlledTests: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  ...Controlled,
  play: async ({ canvas, step, args }) => {
    await step(
      'it should fire the onOpenChange on both open and close',
      async () => {
        const closeButton = canvas.getByRole('button')
        await userEvent.click(closeButton)
        await expect(args.onOpenChange).toHaveBeenCalledWith(false)
        await userEvent.click(canvas.getByRole('button'))
        await expect(args.onOpenChange).toHaveBeenCalledWith(true)
        await expect(args.onOpenChange).toHaveBeenCalledTimes(2)
      },
    )
  },
}
