import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Tree.stories'
import { render } from '../../test-utils'

const {
  Default,
  CascadeSelection,
  ControlledCheckedKeys,
  DisabledNode,
} = composeStories(stories)

// Checkbox clicks use { force: true }: Playwright's actionability check
// treats the visually-hidden <input role="checkbox"> as obscured by its own
// label when nested inside role="row"/role="gridcell" (treegrid ancestors),
// even though the label correctly forwards clicks to it natively — force
// bypasses that false-positive without changing what's actually clicked.
const isChecked = (checkbox: { element: () => Element }) =>
  (checkbox.element() as HTMLInputElement).checked

const isIndeterminate = (checkbox: { element: () => Element }) =>
  (checkbox.element() as HTMLInputElement).indeterminate

describe('given a Tree with cascade selection', async () => {
  it('checking a parent node checks all its descendant leaves', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await getByRole('checkbox', { name: 'Tropiska frukter' }).click({ force: true })

    for (const name of ['Ananas', 'Banan', 'Mango', 'Papaya']) {
      expect(isChecked(getByRole('checkbox', { name }))).toBe(true)
    }
  })

  it('checking one leaf makes its parent indeterminate', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await getByRole('checkbox', { name: 'Ananas' }).click({ force: true })

    const category = getByRole('checkbox', { name: 'Tropiska frukter' })
    expect(isIndeterminate(category)).toBe(true)
    expect(isChecked(category)).toBe(false)
  })

  it('checking every child of a parent makes it fully checked, not indeterminate', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    for (const name of ['Ananas', 'Banan', 'Mango', 'Papaya']) {
      await getByRole('checkbox', { name }).click({ force: true })
    }

    const category = getByRole('checkbox', { name: 'Tropiska frukter' })
    expect(isChecked(category)).toBe(true)
    expect(isIndeterminate(category)).toBe(false)
  })

  it('unchecking a parent unchecks all descendant leaves', async () => {
    const { getByRole } = await render(<CascadeSelection />)
    const category = getByRole('checkbox', { name: 'Tropiska frukter' })

    await category.click({ force: true })
    await category.click({ force: true })

    for (const name of ['Ananas', 'Banan', 'Mango', 'Papaya']) {
      expect(isChecked(getByRole('checkbox', { name }))).toBe(false)
    }
  })

  it('unchecking one leaf under a fully-checked umbrella propagates indeterminate up two ancestor levels', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await getByRole('checkbox', { name: 'Grupp A' }).click({ force: true })
    await getByRole('checkbox', { name: 'Ananas' }).click({ force: true })

    const category = getByRole('checkbox', { name: 'Tropiska frukter' })
    const umbrella = getByRole('checkbox', { name: 'Grupp A' })

    expect(isIndeterminate(category)).toBe(true)
    expect(isIndeterminate(umbrella)).toBe(true)
  })

  it('checking every root-level umbrella fully checks it, not indeterminate', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await getByRole('checkbox', { name: 'Grupp A' }).click({ force: true })

    const umbrella = getByRole('checkbox', { name: 'Grupp A' })
    expect(isChecked(umbrella)).toBe(true)
    expect(isIndeterminate(umbrella)).toBe(false)
  })
})

describe('given a Tree with a controlled checkedKeys prop', async () => {
  it('reflects toggles through the controlled state, not internal state', async () => {
    const { getByRole, getByText } = await render(<ControlledCheckedKeys />)

    await getByRole('checkbox', { name: 'Ananas' }).click({ force: true })

    await expect.element(getByText('Checked leaves: 1')).toBeInTheDocument()
  })

  it('onCheckedChange reflects the full resulting set, not just the toggled key', async () => {
    const { getByRole, getByText } = await render(<ControlledCheckedKeys />)

    await getByRole('checkbox', { name: 'Ananas' }).click({ force: true })
    await getByRole('checkbox', { name: 'Banan' }).click({ force: true })

    await expect.element(getByText('Checked leaves: 2')).toBeInTheDocument()
  })
})

describe('given a Tree with disabled nodes', async () => {
  it('does not toggle a disabled leaf via its own checkbox', async () => {
    const { getByRole } = await render(<DisabledNode />)

    await getByRole('checkbox', { name: 'Ananas' }).click({ force: true })

    expect(isChecked(getByRole('checkbox', { name: 'Ananas' }))).toBe(false)
  })

  it("cascading a parent-check does not affect a disabled descendant's checked state", async () => {
    const { getByRole } = await render(<DisabledNode />)

    await getByRole('checkbox', { name: 'Tropiska frukter' }).click({ force: true })

    expect(isChecked(getByRole('checkbox', { name: 'Ananas' }))).toBe(false)
    expect(isChecked(getByRole('checkbox', { name: 'Banan' }))).toBe(true)
  })

  it('reports the parent as checked (not stuck indeterminate) once every togglable leaf is checked, and round-trips back to unchecked', async () => {
    const { getByRole } = await render(<DisabledNode />)
    const category = getByRole('checkbox', { name: 'Tropiska frukter' })

    await category.click({ force: true })

    expect(isChecked(category)).toBe(true)
    expect(isIndeterminate(category)).toBe(false)

    await category.click({ force: true })

    expect(isChecked(category)).toBe(false)
    expect(isIndeterminate(category)).toBe(false)
    for (const name of ['Banan', 'Mango', 'Papaya']) {
      expect(isChecked(getByRole('checkbox', { name }))).toBe(false)
    }
  })
})

describe('given a Tree navigated by keyboard', async () => {
  // RAC renders role="row"/role="gridcell" (a treegrid, not a plain tree),
  // so a row's interactive content (our Checkbox) isn't directly reachable
  // from row-level focus. Tab/ArrowDown/ArrowUp move between rows; ArrowRight
  // expands a collapsed row OR drills focus into its cell content; Space then
  // acts on whatever is actually focused. This is the correct W3C ARIA APG
  // treegrid pattern, not a workaround — these tests lock it in.

  it('Tab focuses the first row, and ArrowDown moves focus row by row', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await userEvent.tab()
    await expect.element(getByRole('row', { name: 'Grupp A' })).toHaveFocus()

    await userEvent.keyboard('[ArrowDown]')
    await expect
      .element(getByRole('row', { name: 'Tropiska frukter' }))
      .toHaveFocus()
  })

  it('Space at row-level focus does not toggle the checkbox — it must be drilled into first', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown][ArrowDown]') // Grupp A -> Tropiska frukter -> Ananas
    await expect.element(getByRole('row', { name: 'Ananas' })).toHaveFocus()

    await userEvent.keyboard('[Space]')

    expect(isChecked(getByRole('checkbox', { name: 'Ananas' }))).toBe(false)
  })

  it('ArrowRight drills into the row and Space then toggles its checkbox', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown][ArrowDown][ArrowRight][Space]')

    expect(isChecked(getByRole('checkbox', { name: 'Ananas' }))).toBe(true)
  })

  it('toggling a PARENT checkbox via keyboard cascades to its children, same as a mouse click', async () => {
    const { getByRole } = await render(<CascadeSelection />)

    await userEvent.tab()
    // Grupp A -> Tropiska frukter, drill in, toggle
    await userEvent.keyboard('[ArrowDown][ArrowRight][Space]')

    for (const name of ['Ananas', 'Banan', 'Mango', 'Papaya']) {
      expect(isChecked(getByRole('checkbox', { name }))).toBe(true)
    }
  })

  it('ArrowRight on a collapsed branch expands it instead of drilling in', async () => {
    const { getByRole } = await render(<Default />)

    const groupA = getByRole('row', { name: 'Grupp A' })
    expect(groupA.element().getAttribute('data-expanded')).toBeFalsy()

    await userEvent.tab()
    await userEvent.keyboard('[ArrowRight]')

    expect(groupA.element().getAttribute('data-expanded')).toBeTruthy()
  })
})

describe('given a plain Tree with no cascade wiring', async () => {
  it('renders without any checkbox, since children never compose one', async () => {
    const { container } = await render(<Default />)

    expect(container.querySelector('input[type="checkbox"]')).toBeFalsy()
  })

  it('expands a parent node via the chevron button, revealing its children', async () => {
    const { getByRole } = await render(<Default />)

    expect(getByRole('row', { name: /Tropiska frukter/ }).elements().length).toBe(0)

    const groupA = getByRole('row', { name: 'Grupp A' })
    await groupA.getByRole('button').click()

    await expect
      .element(getByRole('row', { name: /Tropiska frukter/ }))
      .toBeVisible()
  })
})
