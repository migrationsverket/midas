import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { InfoBanner } from './InfoBanner'
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

export const Controlled: Story = {
  args: {
    ...Dismissable.args,
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
