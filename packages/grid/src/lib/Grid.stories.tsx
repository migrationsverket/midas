import type { Meta } from '@storybook/react'
import { Grid } from './Grid'
import { Card } from '@midas-ds/card'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    fluid: {
      description:
        'Tar bort alla marginaler för nestad användning. Ha gärna marginal om den används över hela sidan',
      control: { type: 'boolean' },
    },
  },
}
export default meta

export const Primary = {
  args: {},
  render: ({ ...args }) => (
    <Grid fluid={args.fluid}>
      <GridItem col={3}>
        <Card
          title={'Ett kort'}
          content={'Som är i tre kolumner'}
        />
      </GridItem>
      <GridItem col={3}>
        <Card
          title={'Ett kort'}
          content={'Som är i tre kolumner'}
        />
      </GridItem>
      <GridItem col={6}>
        <Card
          title={'Ett kort'}
          content={'Som är i sex kolumner'}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
        />
      </GridItem>
      <GridItem col={4}>
        <Card
          title={'Ett kort'}
          content={'Som är i fyra kolumner'}
        />
      </GridItem>
      <GridItem col={10}>
        <Card
          title={'Ett kort'}
          content={'Som är utan kolumner'}
        />
      </GridItem>
    </Grid>
  ),
}
