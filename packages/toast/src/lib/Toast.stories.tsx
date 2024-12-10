import type { Meta, StoryObj } from '@storybook/react'
import {
  GlobalToastRegion,
  ToastProvider,
  toastQueue,
  MidasToast
} from './Toast'
import { Button } from '@midas-ds/button'

const meta: Meta<MidasToast> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Choose toast type',
      options: ['success', 'info', 'warning', 'important'],
      table: { defaultValue: { summary: 'success' } }
    }
  }
}
export default meta
type Story = StoryObj<MidasToast>

export const Global: Story = {
  args: {
    type: 'success',
    message: 'Inloggningen lyckades'
  },
  render: args => (
    <>
      <GlobalToastRegion />
      <Button
        onPress={() =>
          toastQueue.add(
            {
              message: args.message,
              type: args.type
            },
            { timeout: 500000 }
          )
        }
      >
        Visa en {args.type}-toast
      </Button>
    </>
  )
}

export const Local: Story = {
  args: {
    type: 'success',
    message: 'Inloggningen lyckades'
  },
  render: args => (
    <ToastProvider>
      {state => (
        <Button
          onPress={() =>
            state.add(
              {
                type: args.type,
                message: args.message
              },
              { timeout: 500000 }
            )
          }
        >
          Visa en {args.type}-toast
        </Button>
      )}
    </ToastProvider>
  )
}
