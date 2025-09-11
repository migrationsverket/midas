import {Grid, Text, GridItem } from '@midas-ds/components'
import { tokens, variables } from '@midas-ds/theme'

export const Layers = () => {
  return (
    <Grid
      className='card-guidelines'
    >
      <GridItem
        size={6}
        style={{ colorScheme: 'light', border: '1px solid var(--ifm-color-emphasis-200)' }}
      >
        <div style={{ backgroundColor: variables.backgroundBase, padding: '1rem' }}>
          <Text>background</Text>
          <div style={{ backgroundColor: variables.layer01Base, padding: '1rem', margin: '1rem 0 0 0' }}>
            <Text>layer01</Text>
            <div style={{ backgroundColor: variables.layer02Base, padding: '1rem', margin: '1rem 0 0 0' }}>
              <Text>layer02</Text>
            </div>
          </div>
        </div>
      </GridItem>
      <GridItem
        size={6}
        style={{ colorScheme: 'dark' }}
      >
        <div style={{ backgroundColor: variables.backgroundBase, padding: '1rem' }}>
          <Text>background</Text>
          <div style={{ backgroundColor: variables.layer01Base, padding: '1rem', margin: '1rem 0 0 0' }}>
            <Text>layer01</Text>
            <div style={{ backgroundColor: variables.layer02Base, padding: '1rem', margin: '1rem 0 0 0' }}>
              <Text>layer02</Text>
            </div>
          </div>
        </div>
      </GridItem>
    </Grid>
  )
}
