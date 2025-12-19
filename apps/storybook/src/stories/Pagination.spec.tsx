import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Pagination.stories'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a table with 0 rows', async () => {
  it('both back and forward buttons should be disabled', async () => {
    const { getByLabelText } = await render(<Primary rows={0} />)
    await expect.element(getByLabelText('Nästa sida')).toBeDisabled()
    await expect.element(getByLabelText('Föregående sida')).toBeDisabled()
  })
})

describe('given a table with 1 row', async () => {
  it('should have only one page', async () => {
    const { getByText } = await render(<Primary rows={1} />)
    await expect.element(getByText('1 - 1 av 1 rad')).toBeInTheDocument()
  })
})

describe('given a table with 10 rows', async () => {
  it('should have only one page', async () => {
    const { getByText } = await render(<Primary rows={10} />)
    await expect.element(getByText('1 - 10 av 10 rader')).toBeInTheDocument()
    await expect.element(getByText('av 1 sida')).toBeInTheDocument()
  })
})

describe('given a table with 11 rows', async () => {
  it('should have two pages', async () => {
    const { getByText } = await render(<Primary rows={11} />)
    await expect.element(getByText('1 - 10 av 11 rader')).toBeInTheDocument()
    await expect.element(getByText('av 2 sidor')).toBeInTheDocument()
  })
})
