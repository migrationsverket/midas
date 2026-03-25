import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ListBox.stories'
import { render } from '../../test-utils'

const { SelectionModeSingle } = composeStories(stories)

describe('given a ListBoxItem in a ListBox with selectionMode="single"', async () => {
  it('should change change cursor on hover', async () => {
    const { getByRole } = await render(<SelectionModeSingle />)
    const firstOption = getByRole('option').first()
    await firstOption.hover()
    expect(firstOption).toHaveStyle({ cursor: 'pointer' })
  })
})
