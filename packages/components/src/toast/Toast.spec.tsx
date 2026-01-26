import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Toast.stories'
import { render } from 'vitest-browser-react'

const { Global, Local } = composeStories(stories)

describe('given a local Toast', async () => {
  it('should show a toast with the correct message', async () => {
    const { getByRole, getByText } = await render(<Local />)

    await getByRole('button').click()

    await expect.element(getByText(Local.args.message as string)).toBeVisible()
  })
})

describe('given a global Toast', async () => {
  it('should show a toast with the correct message', async () => {
    const { getByRole, getByText } = await render(<Global />)

    await getByRole('button').click()

    await expect.element(getByText(Global.args.message as string)).toBeVisible()
  })
})
