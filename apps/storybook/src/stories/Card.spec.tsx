import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Card.stories'

const { WithActions, WithPrimaryAction, WithLink } = composeStories(stories)

describe('given a Card with Actions', async () => {
  beforeEach(async () => {
    await WithActions.run()
  })

  it('should be possible to focus the button', async () => {
    const button = page.getByRole('button').last()
    expect(button).not.toHaveFocus()

    // focus the link
    await userEvent.tab()
    await userEvent.tab()

    expect(button).toHaveFocus()
  })
})

describe('given a Card with a primary action', async () => {
  beforeEach(async () => {
    await WithPrimaryAction.run()
  })

  it('should be possible to focus the primary action area', async () => {
    const button = page.getByRole('button').first()
    expect(button).not.toHaveFocus()

    // focus the link
    await userEvent.tab()

    expect(button).toHaveFocus()
  })
})

describe('given a Card with a Link', async () => {
  beforeEach(async () => {
    await WithLink.run()
  })

  it('should be possible to focus the link', async () => {
    const link = page.getByRole('link')
    expect(link).not.toHaveFocus()

    // focus the link
    await userEvent.tab()

    expect(link).toHaveFocus()
  })
})
