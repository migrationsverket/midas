import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Tag.stories'
import styles from '@midas-ds/components/table/Table.module.css'

const { Primary } = composeStories(stories)

describe('given a Primary Tag', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('row')).toHaveClass(
      styles.tag,
      Primary.args.className as string,
    )
  })
})
