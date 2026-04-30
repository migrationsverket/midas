import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import styles from './Layout.module.css'
import * as stories from './Layout.stories'
import { userEvent } from 'vitest/browser'

const { WithMobileMenu } = composeStories(stories)

describe('given a Layout with a mobile menu', async () => {
  it('should accept a custom className', async () => {
    const { container } = await render(
      <WithMobileMenu className='custom-class' />,
    )
    await expect
      .element(container.querySelector(`.${styles.layout}`) as HTMLElement)
      .toHaveClass(styles.layout, 'custom-class')
  })

  it('should be possible to skip to content (DS1375)', async () => {
    const { getByRole } = await render(<WithMobileMenu />)
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await expect.element(getByRole('main')).toHaveFocus()
  })
})
