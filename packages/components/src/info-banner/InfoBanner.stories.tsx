import type { Meta } from '@storybook/react'
import { InfoBanner, InfoBannerProps } from './InfoBanner'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { JSX } from 'react/jsx-runtime'

const meta: Meta<typeof InfoBanner> = {
  component: InfoBanner,
  title: 'Components/InfoBanner',
  tags: ['autodocs'],
}
export default meta

export const Success = {
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

export const Warning = {
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

export const Info = {
  args: {
    title: 'Information',
    message:
      'Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. Detta är ett informationsmeddelande. ',
    type: 'info',
  },
}

export const Important = {
  args: {
    title: 'Viktig',
    message: 'Allt är viktigt',
    type: 'important',
  },
}

export const Dismissable = {
  render: (args: JSX.IntrinsicAttributes & InfoBannerProps) => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen)
    React.useEffect(() => {
      setIsOpen(args.isOpen)
    }, [args.isOpen])
    return (
      <InfoBanner
        {...args}
        isOpen={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen)
          action('onOpenChange')(isOpen)
        }}
      />
    )
  },
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
    isOpen: true, // Default to open
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
  },
}
