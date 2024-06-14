import type { Meta, StoryObj } from '@storybook/react';
import { GlobalToastRegion, ToastProvider, toastQueue } from './Toast';
import { Button } from '@mvds/button';

const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
  title: 'Toast',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Primary: Story = {
  args: {},
  render: () => (
    <ToastProvider>
      {(state: any) => (
        <Button
          onPress={() =>
            state.add(
              { type: 'success', message: 'hello' },
              { type: 'success', timeout: 2000 }
            )
          }
        >
          Show toast
        </Button>
      )}
    </ToastProvider>
  ),
};

export const Global: Story = {
  args: {},
  render: () => (
    <>
      <GlobalToastRegion />
      <Button
        onPress={() =>
          toastQueue.add(
            { message: 'Varning varning', type: 'warning' },
            { timeout: 3000 }
          )
        }
      >
        Show toast
      </Button>
    </>
  ),
};
