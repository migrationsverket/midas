import type { Meta, StoryObj } from '@storybook/react'
import { GlobalToastRegion, ToastProvider, toastQueue } from './Toast'
import { Button } from '@midas-ds/button'

const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
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
type Story = StoryObj<typeof ToastProvider>

export const Primary: Story = {
  args: {
    type: 'success',
  },
  render: (args) => (
    <ToastProvider>
      {(state: any) => (
        <Button
          onPress={() =>
            state.add(
              { type: args.type, message: 'hello' },
              { type: args.type, timeout: 2000 }
            )
          }
        >
          Show {args.type} toast
        </Button>
      )}
    </ToastProvider>
  ),
}

export const Global: Story = {
  args: {
    type: 'warning',
  },
  render: (args) => (
    <>
      <GlobalToastRegion />
      <Button
        onPress={() =>
          toastQueue.add(
            { message: 'Varning varning', type: args.type },
            { timeout: 3000 }
          )
        }
      >
        Show toast
      </Button>
    </>
  ),
}
