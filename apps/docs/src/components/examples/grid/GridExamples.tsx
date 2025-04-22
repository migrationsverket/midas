import { Grid, GridItem } from '@midas-ds/components'
import { semantic } from '@midas-ds/components/theme'

export const Example = props => {
  return (
    <Grid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <GridItem
        col={12}
        style={{
          background: semantic.brandPrimary,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=12
        </span>
      </GridItem>
      <GridItem
        col={3}
        style={{
          background: semantic.iconSuccess,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=3
        </span>
      </GridItem>
      <GridItem
        col={4}
        style={{
          background: semantic.iconInfo,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=4
        </span>
      </GridItem>
      <GridItem
        col={5}
        style={{
          background: semantic.iconWarning,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=5
        </span>
      </GridItem>
      <GridItem
        col={4}
        style={{
          background: semantic.linkVisited,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=4
        </span>
      </GridItem>
      <GridItem
        col={4}
        style={{
          background: semantic.buttonBackgroundPrimary,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=4
        </span>
      </GridItem>
      <GridItem
        col={4}
        style={{
          background: semantic.buttonBackgroundPrimaryActive,
          height: '6rem',
          width: '100%',
          padding: '1rem',
        }}
      >
        <span style={{ color: semantic.textOnColor, fontFamily: 'Fira Code' }}>
          col=4
        </span>
      </GridItem>
    </Grid>
  )
}
