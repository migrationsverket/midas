import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  GlobalToastRegion,
  ToastProvider,
  toastQueue,
  MidasToast,
} from '@midas-ds/components'

const meta: Meta<MidasToast> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      description: 'Choose toast type',
      options: ['success', 'info', 'warning', 'important'],
      table: { defaultValue: { summary: 'success' } },
    },
  },
}
export default meta
type Story = StoryObj<MidasToast>

export const Global: Story = {
  args: {
    type: 'success',
    message: 'Inloggningen lyckades',
  },
  render: args => (
    <>
      <GlobalToastRegion />
      <Button
        onPress={() =>
          toastQueue.add(
            {
              message: args.message,
              type: args.type,
            },
            { timeout: 5000 },
          )
        }
      >
        Visa en {args.type}-toast
      </Button>
    </>
  ),
}

export const Local: Story = {
  args: {
    type: 'success',
    message: 'Inloggningen lyckades',
  },
  render: args => (
    <div style={{ height: 200 }}>
      <ToastProvider>
        {state => (
          <Button
            onPress={() =>
              state.add(
                {
                  type: args.type,
                  message: args.message,
                },
                { timeout: 5000 },
              )
            }
          >
            Visa en {args.type}-toast
          </Button>
        )}
      </ToastProvider>
    </div>
  ),
}
