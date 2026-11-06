import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { Button } from '../button'
import { EmptyState } from './EmptyState'
import * as stories from './EmptyState.stories'
import { EmptyStateActions } from './empty-state-actions'

const { Default, LocalOverrides, VisualAndHeading, WithLink } =
  composeStories(stories)

const heightOf = (element: Element) => element.getBoundingClientRect().height

describe('given an EmptyState', async () => {
  it('should render the heading as an h2 with the h2 look', async () => {
    const { getByRole } = await render(<Default />)
    await expect.element(getByRole('heading', { level: 2 })).toHaveStyle({
      fontSize: '20px',
      lineHeight: '28px',
    })
  })

  it('should render the text as a paragraph with the body look', async () => {
    const { getByText } = await render(<Default />)
    const text = getByText(/Wikis provide a place in your repository/)
    expect(text.element().tagName).toBe('P')
    await expect.element(text).toHaveStyle({ fontSize: '16px' })
  })

  it('should hide the icon from the accessibility tree', async () => {
    const { container } = await render(<VisualAndHeading />)
    expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe(
      'true',
    )
  })

  it('should render a link', async () => {
    const { getByRole } = await render(<WithLink />)
    const link = getByRole('link', { name: 'Gå till startsidan' })
    await expect.element(link).toBeVisible()
  })

  it('should call onPress on its button exactly once', async () => {
    const onPress = vi.fn()
    const { getByRole } = await render(
      <EmptyState>
        <EmptyStateActions>
          <Button onPress={onPress}>Knapp</Button>
        </EmptyStateActions>
      </EmptyState>,
    )
    await userEvent.click(getByRole('button'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})

describe('given an EmptyState with different layouts', async () => {
  it('should center the content by default', async () => {
    const { getByRole } = await render(<Default />)
    await expect.element(getByRole('heading')).toHaveStyle({
      textAlign: 'center',
    })
  })
})

describe('given components with their own props inside an EmptyState', async () => {
  it('should let a local level and elementType on Heading win', async () => {
    const { getByRole } = await render(<LocalOverrides />)
    await expect.element(getByRole('heading', { level: 3 })).toHaveStyle({
      fontSize: '26px',
    })
  })

  it('should let a local size on Text win', async () => {
    const { getByText } = await render(<LocalOverrides />)
    await expect
      .element(getByText('Liten text'))
      .toHaveStyle({ fontSize: '14px' })
  })

  it('should let a local size on Button win', async () => {
    const { getByRole } = await render(<LocalOverrides />)
    expect(heightOf(getByRole('button').element())).toBe(40)
  })
})
