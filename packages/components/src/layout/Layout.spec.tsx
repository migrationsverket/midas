import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import styles from './Layout.module.css'
import * as stories from './Layout.stories'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a primary Layout', async () => {
  it('should use accept a custom className', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.baseLayout}`) as HTMLElement)
      .toHaveClass(styles.baseLayout, Primary.args.className as string)
  })

  it('should be possible to skip to content (DS1375)', async () => {
    const { getByRole } = await render(<Primary />)

    await page.getByText('Din applikation').click()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(getByRole('main')).toHaveFocus()
  })
})
