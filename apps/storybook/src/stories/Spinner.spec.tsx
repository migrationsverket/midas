import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Spinner.stories'
import styles from '@midas-ds/components/spinner/Spinner.module.css'

const { Primary } = composeStories(stories)

describe('given a primary Spinner', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should accept custom classNames', async () => {
    expect(page.getByRole('status')).toHaveClass(
      styles.container,
      Primary.args.className as string,
    )
  })
})
