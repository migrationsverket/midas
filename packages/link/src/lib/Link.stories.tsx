import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Example: Story = {
  args: {
    children: 'Hej',
    href: '#',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Hej',
    href: '#',
  },
};

export const AppLink: Story = {
  args: {
    children: 'Button',
    onPress: () => alert('navigation fn'),
  },
};
