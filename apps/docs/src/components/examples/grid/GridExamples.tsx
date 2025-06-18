import { Checkbox, Grid, GridItem } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'
import * as React from 'react'

export const SimpleExample = (args: typeof Grid) => {
  return (
    <div className='card'>
      <Grid {...args}>
        <GridItem
          size={8}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=8
        </GridItem>
        <GridItem
          size={4}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=4
        </GridItem>
        <GridItem
          size={4}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=4
        </GridItem>
        <GridItem
          size={8}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=8
        </GridItem>
      </Grid>
    </div>
  )
}

export const ResponsiveExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={{ xs: 12, sm: 6, md: 8 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: 8
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 8 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: 8
        </GridItem>
      </Grid>
    </div>
  )
}

export const AutoExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={8}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=8
        </GridItem>
        <GridItem
          size='auto'
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=auto
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 'auto' }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=xs: 12, sm: 6, md: auto
        </GridItem>
      </Grid>
    </div>
  )
}

export const GrowExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={6}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=6
        </GridItem>
        <GridItem
          size='auto'
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=auto
        </GridItem>
        <GridItem
          size='grow'
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=grow
        </GridItem>
      </Grid>
    </div>
  )
}

export const OffsetExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={6}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=6
        </GridItem>
        <GridItem
          size={3}
          offset={3}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=3
        </GridItem>
      </Grid>
    </div>
  )
}

export const ResponsiveOffsetExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={6}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=6
        </GridItem>
        <GridItem
          size={3}
          offset={{ xs: 9, md: 3 }}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=3
        </GridItem>
      </Grid>
    </div>
  )
}

export const NoMarginExample = () => {
  const [margin, setMargin] = React.useState(true)

  return (
    <div className='card'>
      <Checkbox
        isSelected={margin}
        onChange={() => setMargin(!margin)}
      >
        Marginaler avstängda
      </Checkbox>
      <hr />
      <Grid removeMargins={margin}>
        <GridItem
          size={8}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=8
        </GridItem>
        <GridItem
          size={4}
          style={{ background: semantic.layer01, padding: '1rem' }}
        >
          size=4
        </GridItem>
      </Grid>
    </div>
  )
}

export const NestedExample = () => {
  return (
    <div className='card'>
      <Grid style={{ border: '1px solid black', padding: '1rem' }}>
        <GridItem size={6}>
          <Grid
            removeMargins={true}
            style={{ border: '1px solid black', padding: '1rem' }}
          >
            <GridItem
              style={{ background: semantic.layer01, padding: '1rem' }}
              size={6}
            >
              Nästad 1
            </GridItem>
            <GridItem
              style={{ background: semantic.layer01, padding: '1rem' }}
              size={6}
            >
              Nästad 2
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          style={{ background: semantic.layer01, padding: '1rem' }}
          size={6}
        >
          Huvud 2
        </GridItem>
      </Grid>
    </div>
  )
}
