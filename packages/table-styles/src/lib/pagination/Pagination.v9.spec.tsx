import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import * as stories from './Pagination.v9.stories'

const { Primary } = composeStories(stories)

describe('given a TanStack Table v9 instance with 0 rows', async () => {
  it('both back and forward buttons should be disabled', async () => {
    const { getByLabelText } = await render(<Primary rows={0} />)
    await expect.element(getByLabelText('Next page')).toBeDisabled()
    await expect.element(getByLabelText('Previous page')).toBeDisabled()
  })
})

describe('given a TanStack Table v9 instance with 11 rows', async () => {
  it('should have two pages and a working next-page button', async () => {
    const { getByText, getByLabelText } = await render(<Primary rows={11} />)
    await expect.element(getByText('1 - 10 of 11 rows')).toBeInTheDocument()
    await expect.element(getByText('of 2 pages')).toBeInTheDocument()

    const nextButton = getByLabelText('Next page')
    await expect.element(nextButton).toBeEnabled()
    await nextButton.click()
    await expect.element(getByText('11 - 11 of 11 rows')).toBeInTheDocument()
    await expect.element(nextButton).toBeDisabled()
  })
})
