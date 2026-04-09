import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import styles from './Layout.module.css'
import * as stories from './Layout.stories'

const { Primary } = composeStories(stories)

describe('given a primary Layout', async () => {
  it('should render', async () => {
    const { getByText } = await render(<Primary />)

    await expect.element(getByText('Content')).toBeVisible()
  })

  it('should accept a custom className', async () => {
    const { container } = await render(<Primary className='custom-class' />)

    await expect
      .element(container.querySelector(`.${styles.layout}`) as HTMLElement)
      .toHaveClass(styles.layout, 'custom-class')
  })
})
