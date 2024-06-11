import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Card } from '@mvds/card';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof Grid>;

export const Primary = {
  args: {},
  render: () => (
    <Grid>
      <div style={{ gridColumn: 'span 3' }}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} />
      </div>
      <div style={{ gridColumn: 'span 3' }}>
        <Card title={'Ett kort'} content={'Som är i tre kolumner'} />
      </div>
      <div style={{ gridColumn: 'span 6' }}>
        <Card title={'Ett kort'} content={'Som är i sex kolumner'} />
      </div>
      <div style={{ gridColumn: 'span 4' }}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </div>
      <div style={{ gridColumn: 'span 4' }}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </div>
      <div style={{ gridColumn: 'span 4' }}>
        <Card title={'Ett kort'} content={'Som är i fyra kolumner'} />
      </div>
    </Grid>
  ),
};
