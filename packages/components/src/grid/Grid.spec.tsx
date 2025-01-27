import { render } from '@testing-library/react'

import { Grid } from './'

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Grid>
        <div>Item</div>
      </Grid>
    )
    expect(baseElement).toBeTruthy()
  })
})
