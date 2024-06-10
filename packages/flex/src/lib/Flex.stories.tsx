import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { FlexItem } from './FlexItem';
import { Card } from '@mvds/card';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Flex',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary = {
  args: {},
  render: () => (
    <Flex>
      <FlexItem>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem col={2}>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
      <FlexItem col={'auto'}>
        <Card title={'Ett kort'} content={'Som är i ett grid'} />
      </FlexItem>
    </Flex>
  ),
};
