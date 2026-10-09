import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './Tabs.stories'

const {
  DefaultSelectedKey,
  Controlled,
  MoreItemsThanChildren,
  Primary,
  Medium,
  Contained,
} = composeStories(stories)

describe('given a Tabs with a DefaultSelectedKey', async () => {
  beforeEach(async () => {
    await DefaultSelectedKey.run()
  })

  it('the should open the tab "Ansök" per default', async () => {
    expect(page.getByRole('button')).toBeVisible()
  })
})

describe('given a controlled Tabs', async () => {
  beforeEach(async () => {
    await Controlled.run()
  })

  it('should open the tab "Ansök"', async () => {
    await userEvent.click(page.getByRole('tab', { name: 'Ansök' }))
    expect(page.getByRole('button')).toBeVisible()
  })
})

describe('given a Tabs with more items than children', async () => {
  beforeEach(async () => {
    await MoreItemsThanChildren.run()
  })

  it('the page should still render even if the tabs component is misconfigured', async () => {
    expect(page.getByText('derp')).toBeInTheDocument()
  })
})

// The selected tab's label is heavier and so wider. Selecting a tab must not
// move or resize any tab
describe.each([
  ['Primary', Primary],
  ['Medium', Medium],
  ['Contained', Contained],
])('given %s Tabs', (_, Story) => {
  const tabBoxes = () =>
    page
      .getByRole('tab')
      .elements()
      .map(tab => {
        const { left, width } = tab.getBoundingClientRect()
        return { left, width }
      })

  it('should not shift the tabs when another tab is selected', async () => {
    await Story.run()
    const before = tabBoxes()

    for (const tab of page.getByRole('tab').elements().slice(1)) {
      await userEvent.click(tab)
      await expect.element(tab).toHaveAttribute('aria-selected', 'true')
      expect(tabBoxes()).toEqual(before)
    }
  })

  it('should keep the label text in the DOM once', async () => {
    await Story.run()
    const [first] = page.getByRole('tab').elements()

    expect(
      page.getByText(first.textContent ?? '', { exact: true }).elements(),
    ).toHaveLength(1)
  })

  it('should keep the label as the accessible name', async () => {
    await Story.run()
    const [first] = page.getByRole('tab').elements()

    await expect.element(first).toHaveAccessibleName(first.textContent ?? '')
  })
})
