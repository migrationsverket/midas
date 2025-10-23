import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import styles from '@midas-ds/components/layout/Layout.module.css'
import * as stories from './Layout.stories'

const { Primary } = composeStories(stories)

describe('given a primary Layout', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should use accept a custom className', async () => {
    expect(document.querySelector(`.${styles.baseLayout}`)).toHaveClass(
      styles.baseLayout,
      Primary.args.className as string,
    )
  })

  it('should be possible to skip to content (DS1375)', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByRole('main')).toHaveFocus()
  })
})
