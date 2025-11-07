import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Table.stories'
import styles from '@midas-ds/components/table/Table.module.css'

const { Striped } = composeStories(stories)

describe('given a Striped Table', async () => {
  beforeEach(async () => {
    await Striped.run()
  })

  it('should append classNames', async () => {
    expect(page.getByRole('grid')).toHaveClass(
      styles.table,
      Striped.args.className as string,
    )
  })
})
