import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Grid.stories'
import { render } from '../../test-utils'
import styles from './Grid.module.css'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

const { Primary } = composeStories(stories)

describe('given a contained Grid', async () => {
  it('should use appropriate styles', async () => {
    const { container } = await render(<Primary isContained />)

    await expect
      .element(container.querySelector(`.${styles.container}`) as HTMLElement)
      .toHaveClass(styles.container, styles.contained)
  })
})

describe('given a Grid without margins', async () => {
  it('should use appropriate styles', async () => {
    const { container } = await render(<Primary removeMargins />)

    await expect
      .element(container.querySelector(`.${styles.container}`) as HTMLElement)
      .toHaveClass(styles.container, styles.removeMargins)
  })
})

describe('given GridItems with padding', async () => {
  it('should fit the columns of a row on one line', async () => {
    const { getByText } = await render(
      <Grid>
        <GridItem
          size={8}
          style={{ padding: '1rem' }}
        >
          Eight
        </GridItem>
        <GridItem
          size={4}
          style={{ padding: '1rem' }}
        >
          Four
        </GridItem>
      </Grid>,
    )

    const eight = getByText('Eight').element().getBoundingClientRect()
    const four = getByText('Four').element().getBoundingClientRect()
    expect(four.top).toBe(eight.top)
  })
})
