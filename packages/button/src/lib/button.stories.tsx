import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Testing = (args: any) => <Button {...args}>Click</Button>;
