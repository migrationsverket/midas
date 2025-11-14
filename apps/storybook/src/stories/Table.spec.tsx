import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Table.stories'
import styles from '@midas-ds/components/table/Table.module.css'

const { Striped, Virtualized } = composeStories(stories)

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

describe('given a VirtualizedStriped Table', async () => {
  beforeEach(async () => {
    await Virtualized.run({
      args: {
        ...Virtualized.args,
        striped: true,
      }
    })
  })

  it('should have striped class', async () => {
    const table = page.getByRole('grid')
    expect(table).toHaveClass(styles.striped)
  })

  it('should have data-even attribute on rows', async () => {

    const allRows = document.querySelectorAll('[role="row"]')
    const dataRows = Array.from(allRows).slice(1) // Skip header row

    let evenRowCount = 0
    let oddRowCount = 0

    for (const row of dataRows) {
      const dataEven = row.getAttribute('data-even')
      if (dataEven === 'true') {
        evenRowCount++
      } else if (dataEven === 'false') {
        oddRowCount++
      }
    }

    expect(evenRowCount).toBeGreaterThan(0)
    expect(oddRowCount).toBeGreaterThan(0)
  })
})
