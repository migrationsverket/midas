import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Blankslate.stories'
import { Blankslate, BlankslateHeading } from './Blankslate'
import { render } from '../../test-utils'

const { Default, WithSecondaryAction } = composeStories(stories)

describe('given a default Blankslate', async () => {
  it('should render the heading as a level 2 heading', async () => {
    const { getByRole } = await render(<Default />)

    await expect
      .element(getByRole('heading', { level: 2, name: 'No results found' }))
      .toBeInTheDocument()
  })

  it('should render the description as a paragraph', async () => {
    const { getByText } = await render(<Default />)

    expect(getByText(/Try adjusting your search/).element().tagName).toBe('P')
  })

  it('should hide the visual from assistive technology', async () => {
    const { container } = await render(<Default />)

    await expect
      .element(container.querySelector('svg') as SVGElement)
      .toHaveAttribute('aria-hidden', 'true')
  })

  it('should cap its content width at 38rem', async () => {
    const { getByRole } = await render(<Default />)
    const content = getByRole('heading').element().parentElement as HTMLElement

    expect(getComputedStyle(content).maxWidth).toBe('608px')
  })

  it('should accept a custom className and pass through other props', async () => {
    const { getByTestId } = await render(
      <Default
        className='custom'
        data-testid='blankslate'
      />,
    )

    await expect.element(getByTestId('blankslate')).toHaveClass('custom')
  })
})

describe('given a Blankslate in a narrow container', async () => {
  it('should reduce its padding', async () => {
    const { getByRole } = await render(
      <div style={{ width: '320px' }}>
        <Default />
      </div>,
    )
    const content = getByRole('heading').element().parentElement as HTMLElement

    expect(getComputedStyle(content).padding).toBe('16px')
  })
})

describe('given a Blankslate in a wide container', async () => {
  it('should use the full padding', async () => {
    const { getByRole } = await render(
      <div style={{ width: '800px' }}>
        <Default />
      </div>,
    )
    const content = getByRole('heading').element().parentElement as HTMLElement

    expect(getComputedStyle(content).padding).toBe('32px')
  })
})

describe('given a Blankslate in a shrink-to-fit parent', async () => {
  it('should fill the parent instead of collapsing', async () => {
    const { getByRole } = await render(
      <div style={{ display: 'flex', width: '800px' }}>
        <Default />
      </div>,
    )
    const root = getByRole('heading').element().parentElement
      ?.parentElement as HTMLElement

    expect(root.getBoundingClientRect().width).toBe(800)
  })
})

describe('given a Blankslate with a secondary action', async () => {
  it('should reach the actions in order with the keyboard', async () => {
    const { getByRole } = await render(<WithSecondaryAction />)

    await userEvent.tab()
    await expect
      .element(getByRole('button', { name: 'New case' }))
      .toHaveFocus()

    await userEvent.tab()
    await expect.element(getByRole('link', { name: 'Learn more' })).toHaveFocus()
  })
})

describe('given a BlankslateHeading with a custom level', async () => {
  it('should render at that level', async () => {
    const { getByRole } = await render(
      <Blankslate>
        <BlankslateHeading level={1}>Page not found</BlankslateHeading>
      </Blankslate>,
    )

    await expect
      .element(getByRole('heading', { level: 1, name: 'Page not found' }))
      .toBeInTheDocument()
  })
})
