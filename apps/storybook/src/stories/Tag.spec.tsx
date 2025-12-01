import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Tag.stories'
import styles from '@midas-ds/components/table/Table.module.css'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a Primary Tag', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('row'))
      .toHaveClass(styles.tag, Primary.args.className as string)
  })
})
