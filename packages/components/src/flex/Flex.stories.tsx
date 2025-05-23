import type { Meta } from '@storybook/react'
import { Card, CardContent, CardTitle } from '../card'
import { Flex } from './Flex'
import { FlexItem } from './FlexItem'
import { Text } from '../text'

const meta: Meta<typeof Flex> = {
  component: Flex,
  subcomponents: {
    FlexItem: FlexItem as React.ComponentType<unknown>,
  },
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
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem col={6}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem col={3}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem col={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem col={4}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem
        col={3}
        offset={1}
      >
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem col='auto'>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
      <FlexItem>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </FlexItem>
    </Flex>
  ),
}
