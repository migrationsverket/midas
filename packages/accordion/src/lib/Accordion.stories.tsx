import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionItem } from './AccordionItem';

const ITEMS = ['Ett', 'Två', 'Tre', 'Fyra'];

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  tags: ['autodocs'],
  args: {
    type: 'single',
  },
  argTypes: {
    type: {
      name: 'type',
      options: ['multiple', 'single'],
      control: { type: 'radio' },
    },
    collapsible: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = {
  args: {
    type: 'single',
  },
  render: ({ ...args }) => {
    return (
      <Accordion {...args}>
        {ITEMS.map((item) => (
          <AccordionItem value={item}>
            <AccordionTrigger>Trigger {item}</AccordionTrigger>
            <AccordionContent>Content {item}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export const MultipleItems: Story = {
  ...AccordionTemplate,
  args: {
    type: 'multiple',
  },
};

export const TypeSingle: Story = {
  ...AccordionTemplate,
  args: {
    type: 'single',
  },
};
