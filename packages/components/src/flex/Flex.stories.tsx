import type { Meta } from '@storybook/react'
import { Card } from '../card'
import { Flex } from './Flex'
import { FlexItem } from './FlexItem'

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Components/Flex',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      test: 'todo',
    },
  },
  argTypes: {
    fluid: {
      control: {
        type: 'boolean',
      },
    },
  },
}
export default meta

export const Primary = {
  args: {},
  render: ({ ...args }) => (
    <Flex fluid={args.fluid}>
      <FlexItem col={3}>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem col={6}>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem col={3}>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem col={4}>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem col={4}>
        <Card
          title='Ett kort'
          content='Som är i ett grid men just detta kort har väldigt mycket text för att illustrera att de andra också växer på höjden.'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem
        col={3}
        offset={1}
      >
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem col='auto'>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
      <FlexItem>
        <Card
          title='Ett kort'
          content='Som är i ett grid'
          link={{ children: 'Länk', href: '#' }}
        />
      </FlexItem>
    </Flex>
  ),
}
