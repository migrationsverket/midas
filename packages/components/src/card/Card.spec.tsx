import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Card.stories'
import { render } from '../../test-utils'
import { Card } from './Card'
import { CardHeader } from './card-header'

const {
  Example,
  WithHeaderAndBody,
  LegacyWithActions,
  LegacyWithPrimaryAction,
  LegacyWithLink,
  LegacyWithCustomLink,
} = composeStories(stories)

// ─── New API ─────────────────────────────────────────────────────────────────

describe('given a Card with CardHeader', async () => {
  it('should render the heading text', async () => {
    const { getByRole } = await render(<Example />)
    await expect.element(getByRole('heading')).toHaveTextContent('Sven Svensson')
  })

  it('should render the subHeading when provided', async () => {
    const { getByText } = await render(<WithHeaderAndBody />)
    await expect.element(getByText('En underrubrik')).toBeVisible()
  })

  it('should render the correct semantic heading element when headingLevel is set', async () => {
    const { getByRole } = await render(
      <Card>
        <CardHeader
          headingLevel='h4'
          heading='En rubrik'
        />
      </Card>,
    )
    await expect.element(getByRole('heading', { level: 4 })).toBeVisible()
  })
})

describe('given a Card with CardActions', async () => {
  it('should be possible to focus the action button', async () => {
    const { getByRole } = await render(<Example />)
    const button = getByRole('button')

    await expect.element(button).not.toHaveFocus()

    await userEvent.tab()

    await expect.element(button).toHaveFocus()
  })
})

// ─── Legacy API ───────────────────────────────────────────────────────────────

describe('given a Card with Actions', async () => {
  it('should be possible to focus the button', async () => {
    const { getByRole } = await render(<LegacyWithActions />)
    const button = getByRole('button').last()

    await expect.element(button).not.toHaveFocus()

    await userEvent.tab()
    await userEvent.tab()

    await expect.element(button).toHaveFocus()
  })
})

describe('given a Card with a primary action', async () => {
  it('should be possible to focus the primary action area', async () => {
    const { getByRole } = await render(<LegacyWithPrimaryAction />)
    const button = getByRole('button').first()

    await expect.element(button).not.toHaveFocus()

    await userEvent.tab()

    await expect.element(button).toHaveFocus()
  })
})

describe('given a Card with a Link', async () => {
  it('should be possible to focus the link', async () => {
    const { getByRole } = await render(<LegacyWithLink />)
    const link = getByRole('link')

    await expect.element(link).not.toHaveFocus()

    await userEvent.tab()

    await expect.element(link).toHaveFocus()
  })

  it('should set data-hovered on the link when hovered', async () => {
    const { getByRole } = await render(<LegacyWithLink />)
    const link = getByRole('link')
    await link.hover()
    await expect.element(link).toHaveAttribute('data-hovered')
  })
})

describe('given a Card with a custom Link', async () => {
  it('should not set data-hovered on the link when hovered', async () => {
    const { getByRole } = await render(<LegacyWithCustomLink />)
    const link = getByRole('link')
    await link.hover()
    await expect.element(link).not.toHaveAttribute('data-hovered')
  })
})
