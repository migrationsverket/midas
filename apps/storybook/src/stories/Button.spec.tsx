import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Button.stories'

const { Primary, Secondary } = composeStories(stories)

describe('given a basic Button', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should have focus when clicked', async () => {
    const button = page.getByRole('button')
    await userEvent.click(button)
    expect(button).toBeEnabled()
    expect(button).toHaveFocus()
  })
})

describe('given a disabled primary Button', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        isDisabled: true,
      },
    })
  })

  it('should be disabled', async () => {
    expect(page.getByRole('button')).toBeDisabled()
  })
})

describe('given a disabled secondary Button', async () => {
  beforeEach(async () => {
    await Secondary.run({
      args: {
        ...Secondary.args,
        isDisabled: true,
      },
    })
  })

  it('should be disabled', async () => {
    expect(page.getByRole('button')).toBeDisabled()
  })
})
