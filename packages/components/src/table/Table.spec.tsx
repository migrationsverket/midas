import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './Table.stories'
import styles from './Table.module.css'
import { render } from '../../test-utils'

const { Striped, Virtualized, InteractiveCells } = composeStories(stories)

describe('given a Striped Table', async () => {
  it('should append classNames', async () => {
    const { getByRole } = await render(<Striped />)

    await expect
      .element(getByRole('grid'))
      .toHaveClass(styles.table, Striped.args.className as string)
  })
})

describe('given a VirtualizedStriped Table', async () => {
  beforeEach(async () => {
    await render(<Virtualized striped />)
  })

  it('should have striped class', async () => {
    const table = page.getByRole('grid')
    await expect.element(table).toHaveClass(styles.striped)
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

describe('given a Table with interactive cells', async () => {
  it('should move focus into interactive elements with Tab when keyboardNavigationBehavior is tab', async () => {
    const { getByRole, getByLabelText } = await render(<InteractiveCells />)

    const noteField = getByLabelText('Note for Games')
    const editButton = getByRole('button', { name: 'Edit' }).first()

    await userEvent.tab()
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.tab()
    await expect.element(noteField).toHaveFocus()

    await userEvent.tab({ shift: true })
    await userEvent.keyboard('{ArrowRight}')
    await userEvent.tab()
    await expect.element(editButton).toHaveFocus()
  })
})
