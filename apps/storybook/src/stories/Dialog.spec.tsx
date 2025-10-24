import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './Dialog.stories'

const { DS1282 } = composeStories(stories)

describe('DS1282', async () => {
  beforeEach(async () => {
    await DS1282.run()
  })

  it('it should be possible to use the select multiple times while rendering a table with modals', async () => {
    // Open modal
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    const hiddenSelect = page.getByLabelText('test-hidden')

    // Select "apple"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')
    expect(hiddenSelect).toHaveDisplayValue('apple')

    // Select "banana"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Space]')
    expect(hiddenSelect).toHaveDisplayValue('banana')
  })
})
