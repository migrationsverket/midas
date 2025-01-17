import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem } from './Accordion'

const ITEMS = ['Ett', 'Två', 'Tre', 'Fyra']

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  tags: ['autodocs'],
  args: {},
  argTypes: {
    // type: {
    //   name: 'type',
    //   options: ['multiple', 'single'],
    //   control: { type: 'radio' }
    // },
    // collapsible: {
    //   options: [true, false],
    //   control: { type: 'radio' }
    // },
    // headingTag: {
    //   description: 'Choose HTML element to wrap the title on each item'
    // }
  }
}

export default meta
type Story = StoryObj<typeof Accordion>

export const SingleSubtle: Story = {
  args: {
    children: ITEMS.map(item => (
      <AccordionItem
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
      >
        Innehåll i öppningsbarpanel {item}
      </AccordionItem>
    ))
  }
}

export const SingleBoxed: Story = {
  args: {
    variant: 'boxed',
    children: ITEMS.map(item => (
      <AccordionItem
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
      >
        Innehåll i öppningsbarpanel {item}
      </AccordionItem>
    ))
  }
}
