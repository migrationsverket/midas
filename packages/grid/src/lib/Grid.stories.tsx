import type { Meta } from '@storybook/react'
import { Grid } from './Grid'
import { Card } from '@migrationsverket/card'
import { GridItem } from './GridItem'

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

export const Primary = {
  args: {},
  render: () => (
    <Grid>
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
