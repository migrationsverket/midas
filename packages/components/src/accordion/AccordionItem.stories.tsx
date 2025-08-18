import type { Meta, StoryObj } from '@storybook/react'
import { AccordionItem } from './'

const meta: Meta<typeof AccordionItem> = {
  component: AccordionItem,
  title: 'Components/Accordion/AccordionItem',
  tags: ['autodocs'],
  args: {
    title: 'An accordion item',
    children: 'Content of the accordion item. Content of the accordion item. Content of the accordion item. Content of the accordion item.',
  },
}

export default meta
type Story = StoryObj<typeof AccordionItem>

export const Default: Story = {
  args: {
    status: undefined,
    isContained: false,
  },
}

export const Contained: Story = {
  args: {
    title: 'An accordion item contained',
    children: 'Content of the accordion item.',
    status: undefined,
    isContained: true,
  }
}

export const Success: Story = {
  args: {
    title: 'A true success story',
    status: 'success',
    isContained: true,
  },
}

export const Info: Story = {
  args: {
    status: 'info',
    isContained: true,
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
    isContained: true,
  },
}

export const Important: Story = {
  args: {
    status: 'important',
    isContained: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    status: undefined,
  },
};

export const StatusDisabled: Story = {
  args: {
    isDisabled: true,
    status: 'success',
    isContained: true,
  },
};
