import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Spinner.stories'
import styles from '@midas-ds/components/spinner/Spinner.module.css'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a primary Spinner', async () => {
  it('should accept custom classNames', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('status'))
      .toHaveClass(styles.container, Primary.args.className as string)
  })
})
