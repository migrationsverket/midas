import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './LinkButton.stories'
import { render } from '../../test-utils'

const { Primary, Secondary, Tertiary, Danger, Disabled, NewTab } = composeStories(stories)

describe('given a LinkButton that opens in a new tab', async () => {
  it('should include visually hidden text for the new tab icon', async () => {
    const { getByText } = await render(<NewTab />)
    expect(getByText('Opens in new tab')).toBeDefined()
  })

  it('should hide the icon from the accessibility tree', async () => {
    const { container } = await render(<NewTab />)
    const icon = container.querySelector('svg')
    expect(icon?.getAttribute('aria-hidden')).toBe('true')
  })
})

describe('given a disabled LinkButton', async () => {
  it('should have cursor not allowed when disabled', async () => {
    const { getByRole } = await render(<Disabled />)
    const link = getByRole('link')

    await link.hover()

    await expect.element(link).toHaveStyle({ cursor: 'not-allowed' })
  })
})

describe('given a primary LinkButton', async () => {
  it('should set data-hovered when hovered', async () => {
    const { getByRole } = await render(<Primary />)
    await getByRole('link').hover()
    await expect.element(getByRole('link')).toHaveAttribute('data-hovered')
  })
})

describe('given a secondary LinkButton', async () => {
  it('should set data-hovered when hovered', async () => {
    const { getByRole } = await render(<Secondary />)
    await getByRole('link').hover()
    await expect.element(getByRole('link')).toHaveAttribute('data-hovered')
  })
})

describe('given a tertiary LinkButton', async () => {
  it('should set data-hovered when hovered', async () => {
    const { getByRole } = await render(<Tertiary />)
    await getByRole('link').hover()
    await expect.element(getByRole('link')).toHaveAttribute('data-hovered')
  })
})

describe('given a danger LinkButton', async () => {
  it('should set data-hovered when hovered', async () => {
    const { getByRole } = await render(<Danger />)
    await getByRole('link').hover()
    await expect.element(getByRole('link')).toHaveAttribute('data-hovered')
  })
})
