import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Grid.stories'
import { render } from 'vitest-browser-react'
import styles from './Grid.module.css'

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
