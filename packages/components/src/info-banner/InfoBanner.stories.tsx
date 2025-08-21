import type { Meta } from '@storybook/react-vite'
import { InfoBanner } from './InfoBanner'

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
  args: {
    title: 'Thank you!',
    message:
      'You are now done sharing all passports - alternatively you have \n' +
      '        submitted a reply that you were not able or willing to share.\n' +
      '          \n' +
      '        You can close the e-service. We will contact you if we need more\n' +
      '        information. You will hear from us when we have made a decision.',
    type: 'success',
    dismissable: true,
  },
}
