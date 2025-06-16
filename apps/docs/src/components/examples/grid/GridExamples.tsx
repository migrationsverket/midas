import { Grid, GridItem } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'

export const SimpleExample = () => {
  return (
    <div className='card'>
      <Grid>
        <GridItem
          size={8}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=8
        </GridItem>
        <GridItem
          size={4}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=4
        </GridItem>
        <GridItem
          size={4}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=4
        </GridItem>
        <GridItem
          size={8}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
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
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=xs: 12, sm: 6, md: 8
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 8 }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
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
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=8
        </GridItem>
        <GridItem
          size='auto'
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=auto
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 4 }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=xs: 12, sm: 6, md: 4
        </GridItem>
        <GridItem
          size={{ xs: 12, sm: 6, md: 'auto' }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
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
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=6
        </GridItem>
        <GridItem
          size='auto'
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=auto
        </GridItem>
        <GridItem
          size='grow'
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
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
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=6
        </GridItem>
        <GridItem
          size={3}
          offset={3}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
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
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=6
        </GridItem>
        <GridItem
          size={3}
          offset={{ xs: 9, md: 3 }}
          style={{
            background: semantic.layer01,
            padding: '1rem',
          }}
        >
          size=3
        </GridItem>
      </Grid>
    </div>
  )
}
