import type { Meta } from '@storybook/react'
import { Card } from '@midas-ds/card'
import { Flex } from './Flex'
import { FlexItem } from './FlexItem'

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Components/Flex',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    fluid: {
      description:
        'Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan',
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
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem col={6}>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem col={3}>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem
        col={3}
        offset={1}
      >
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem col={'auto'}>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
      <FlexItem>
        <Card
          title={'Ett kort'}
          content={'Som är i ett grid'}
        />
      </FlexItem>
    </Flex>
  ),
}
