import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './Tabs.stories'

const { DefaultSelectedKey, Controlled, MoreItemsThanChildren } =
  composeStories(stories)

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
