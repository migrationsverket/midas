import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ListBox.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '../utils/intl'
import { ListBox } from './ListBox'
import { ListBoxLoadMoreItem } from './ListBoxLoadMoreItem'

const { SelectionModeSingle, NotVirtualized } = composeStories(stories)

describe('given a ListBoxItem in a ListBox with selectionMode="single"', async () => {
  it('should change cursor on hover', async () => {
    const { getByRole } = await render(<SelectionModeSingle />)
    const firstOption = getByRole('option').first()
    await firstOption.hover()
    await expect.element(firstOption).toHaveStyle({ cursor: 'pointer' })
  })

  it('should set data-pressed on the item while being pressed', async () => {
    const { getByRole } = await render(<SelectionModeSingle />)
    const firstOption = getByRole('option').first()
    const el = firstOption.element()

    let pressedAtSomePoint = false
    const observer = new MutationObserver(() => {
      if (el.hasAttribute('data-pressed')) pressedAtSomePoint = true
    })
    observer.observe(el, {
      attributes: true,
      attributeFilter: ['data-pressed'],
    })

    await firstOption.click()
    observer.disconnect()

    expect(pressedAtSomePoint).toBe(true)
  })
})

describe('given a ListBox with virtualized (default)', async () => {
  it('should render items through the Virtualizer', async () => {
    const { container } = await render(<SelectionModeSingle />)
    expect(
      container.querySelector('[style*="contain: size layout style"]'),
    ).toBeTruthy()
  })
})

describe('given a Swedish locale', async () => {
  it('renders the load-more item with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <ListBox
          aria-label='fruit'
          virtualized={false}
        >
          <ListBoxLoadMoreItem isLoading />
        </ListBox>
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Laddar...')
  })
})

describe('given a ListBox with virtualized={false}', async () => {
  it('should render all items in a section without the Virtualizer', async () => {
    const { container, getByText } = await render(<NotVirtualized />)

    await expect.element(getByText('Item 1')).toBeInTheDocument()
    await expect.element(getByText('Item 2')).toBeInTheDocument()
    expect(
      container.querySelector('[style*="contain: size layout style"]'),
    ).toBeFalsy()
  })
})
