import type { Meta, StoryObj } from '@storybook/react-vite'
import { AccordionItem } from './AccordionItem'

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

/**
 * Snapshot-only copy of a story with the item expanded, since the visual
 * tests don't click the trigger. Hidden from the sidebar and docs
 */
const expanded = (story: Story): Story => ({
  ...story,
  tags: ['!dev', '!autodocs'],
  args: { ...story.args, defaultExpanded: true },
})

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

export const TypeWithoutContained: Story = {
  args: {
    type: 'success',
    isContained: false,
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

export const ContentBackgroundNeutral: Story = {
  args: {
    type: 'success',
    isContained: true,
    contentBackground: 'neutral',
    defaultExpanded: true,
  },
}

export const ContentBackgroundInherit: Story = {
  args: {
    type: 'success',
    isContained: true,
    contentBackground: 'inherit',
    defaultExpanded: true,
  },
}

export const DefaultExpanded = expanded(Default)

export const ContainedExpanded = expanded(Contained)

export const SuccessExpanded = expanded(Success)

export const InfoExpanded = expanded(Info)

export const WarningExpanded = expanded(Warning)

export const ImportantExpanded = expanded(Important)

export const TypeWithoutContainedExpanded = expanded(TypeWithoutContained)
