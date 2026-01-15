import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Dialog.stories'
import { render } from 'vitest-browser-react'

const { DS1282 } = composeStories(stories)

describe('DS1282', async () => {
  it('should be possible to use the select multiple times while rendering a table with modals', async () => {
    const { getByTestId } = await render(<DS1282 />)

    // Open modal
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    // Get the value of the select
    const hiddenSelectContainer = getByTestId('hidden-select-container')

    // Select "apple"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(hiddenSelectContainer.getByText('apple'))
      .toBeInTheDocument()

    // Select "banana"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(hiddenSelectContainer.getByText('banana'))
      .toBeInTheDocument()
  })
})
