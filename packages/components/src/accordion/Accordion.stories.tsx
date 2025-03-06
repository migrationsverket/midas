import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem } from './'
import { File } from 'lucide-react'
import { expect } from '@storybook/test'
import { ACCORDION_TEST_ID } from './Accordion'

const ITEMS = ['Ett', 'Två', 'Tre', 'Fyra']

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof Accordion>

export const SingleSubtle: Story = {
  args: {
    className: 'test',
    children: ITEMS.map(item => (
      <AccordionItem
        id={item}
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
      >
        Innehåll i öppningsbar panel {item}. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore nesciunt at aliquam! Blanditiis
        quasi consequuntur doloremque harum commodi odit velit pariatur
        voluptate aliquid, inventore praesentium tempore dignissimos officia
        sint libero!
      </AccordionItem>
    )),
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should preserve its classNames when being passed new ones',
      async () => {
        const accordion = canvas.getByTestId(ACCORDION_TEST_ID)
        expect(accordion).toHaveClass(/root/, 'test')
      },
    )
  },
}

export const SingleBoxed: Story = {
  args: {
    variant: 'contained',
    children: ITEMS.map(item => (
      <AccordionItem
        id={item}
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
      >
        Innehåll i öppningsbar panel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>
    )),
  },
}

export const MultipleSubtle: Story = {
  args: {
    ...SingleSubtle.args,
    type: 'multiple',
  },
}

export const MultipleBoxed: Story = {
  args: {
    ...SingleBoxed.args,
    type: 'multiple',
  },
}

export const DefaultOpen: Story = {
  args: {
    ...SingleBoxed.args,
    defaultExpandedKeys: ['Två'],
  },
}

export const CustomTriggerElements: Story = {
  args: {
    ...SingleBoxed.args,
    children: ITEMS.map((item, i) => (
      <AccordionItem
        id={item}
        key={item}
        title={
          <>
            <File />
            <b>En öppningsbar panel ' + {item.toLocaleLowerCase()}</b>
            <p style={{ margin: 0 }}>2025-03-0{i}</p>
          </>
        }
      >
        Innehåll i öppningsbarpanel {item} Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellendus perspiciatis officia,
        voluptate ratione quam nemo quod aut maiores animi nostrum, in labore
        adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Impedit dolorem tempora
        laboriosam asperiores eum dignissimos accusantium voluptate eligendi
        beatae vel quis rerum error dolore cum incidunt pariatur accusamus,
        illum consequuntur?
      </AccordionItem>
    )),
  },
}
