import type { Meta, StoryObj } from '@storybook/react-vite'
import { AccordionItem } from '@midas-ds/components'

type Story = StoryObj<typeof AccordionItem>

export default {
  component: AccordionItem,
  title: 'Components/Accordion/AccordionItem',
  tags: ['autodocs'],
  args: {
    title: 'An accordion item',
    children:
      'Content of the accordion item. Content of the accordion item. Content of the accordion item. Content of the accordion item.',
    size: 'large',
  },
} satisfies Meta<typeof AccordionItem>

export const Default: Story = {
  args: {
    type: undefined,
    isContained: false,
  },
}

export const Contained: Story = {
  args: {
    title: 'An accordion item contained',
    children: 'Content of the accordion item.',
    type: undefined,
    isContained: true,
  },
}

export const Success: Story = {
  args: {
    title: 'A true success story',
    type: 'success',
    isContained: true,
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    isContained: true,
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    isContained: true,
  },
}

export const Important: Story = {
  args: {
    type: 'important',
    isContained: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    type: undefined,
  },
}

export const StatusDisabled: Story = {
  args: {
    isDisabled: true,
    type: 'success',
    isContained: true,
  },
}
