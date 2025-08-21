import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionItem } from './'
import { File } from 'lucide-react'
import { expect, userEvent } from 'storybook/test'
import { ACCORDION_TEST_ID } from './Accordion'
import styles from './Accordion.module.css'
import React from 'react'
import { Button } from '../button'
import { hexToRgb, lightDark } from '../utils/test'

const ITEMS = ['Ett', 'Två', 'Tre', 'Fyra']

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  subcomponents: {
    AccordionItem: AccordionItem as React.ComponentType<unknown>,
  },
  title: 'Components/Accordion',
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
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
        await expect(accordion).toHaveClass(styles.root, 'test')
      },
    )
  },
}

export const Contained: Story = {
  args: {
    ...Default.args,
    isContained: true,
  },
}


export const AllowsMultipleExpanded: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Default.args,
    allowsMultipleExpanded: true,
  },
}

export const DefaultExpandedKeys: Story = {
  args: {
    ...Default.args,
    defaultExpandedKeys: ['Två'],
  },
}

export const CustomTriggerElements: Story = {
  args: {
    ...Contained.args,
    children: ITEMS.map((item, i) => (
      <AccordionItem
        id={item}
        key={item}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <File />
            <b>En öppningsbar panel ' + {item.toLocaleLowerCase()}</b>
            <p style={{ margin: 0 }}>2025-03-0{i}</p>
          </div>
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

export const DynamicContent: Story = {
  args: {},
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => (
    <Accordion>
      <AccordionItem title='AccordionItem with dynamic content'>
        Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a
        fruit salad.
        <ExpandableStuff />
      </AccordionItem>
      <AccordionItem title='Another AccordionItem'>
        More text about another subject...
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas }) => {
    await userEvent.click(
      canvas.getByRole('button', {
        name: 'AccordionItem with dynamic content',
      }),
    )
    await userEvent.click(canvas.getByTestId('btn-0'))
    await expect(canvas.getByTestId('hidden-content')).toBeVisible()
  },
}

export const DS1060: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => (
    <Accordion>
      <AccordionItem title='Test'>
        <Button isDisabled>Test</Button>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvas, step, globals: { scheme } }) => {
    await step(
      'it should not have the disabled style even if it contains disabled children',
      async () => {
        await expect(
          canvas.getByRole('heading', { level: 2, name: 'Test' }),
        ).toHaveStyle({
          color: lightDark(hexToRgb('#171717'), hexToRgb('#f2f2f2'), scheme),
        })
      },
    )
  },
}

const ExpandableStuff = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <div>
      <button
        onClick={() => setIsVisible(p => !p)}
        data-testid='btn-0'
      >
        {isVisible ? 'hide' : 'show'}
      </button>
      {isVisible ? (
        <div
          style={{
            background: 'black',
            color: 'white',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          data-testid='hidden-content'
        >
          Pineapples were once so rare and expensive in Europe that people used
          them as a status symbol—even renting them for parties to show off
          wealth, without ever eating them!
        </div>
      ) : null}
    </div>
  )
}



export const AccordionHasBackground: Story = {
  args: {
    variant: 'contained',
    children: ITEMS.map((item, i) => (
      <AccordionItem
        id={item}
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
        type={i === 2 ? 'success' : i === 3 ? 'warning' : undefined}
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


