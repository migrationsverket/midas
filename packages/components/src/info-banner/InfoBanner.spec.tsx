import { describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './InfoBanner.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '../utils/intl'

const { Success, Dismissable, Controlled } = composeStories(stories)

const handleOpenChange = vi.fn()

describe('given a Success InfoBanner', async () => {
  it('should be visible by default', async () => {
    const { getByRole } = await render(<Success />)
    await expect.element(getByRole('complementary')).toBeVisible()
  })

  it('should not be in the document if defaultOpen = false', async () => {
    const { getByRole } = await render(<Success defaultOpen={false} />)
    await expect.element(getByRole('complementary')).not.toBeInTheDocument()
  })
})

describe('given a dismissable InfoBanner', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should fire the onOpenChange event and close', async () => {
    const { getByRole } = await render(
      <Dismissable onOpenChange={handleOpenChange} />,
    )

    await getByRole('button').click()

    expect(handleOpenChange).toHaveBeenCalledExactlyOnceWith(false)
    await expect.element(getByRole('button')).not.toBeInTheDocument()
  })
})

describe('given a Swedish locale', async () => {
  it('renders the dismiss button and status icon with Swedish text', async () => {
    // Dismissable uses type: 'success', which also exercises the shared
    // FeedbackStatusIcon translations ("ok" -> "okej").
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Dismissable />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Stäng')
    expect(container.innerHTML).toContain('okej')
  })
})

describe('given a controlled InfoBanner', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should only fire the onOpenChange on close', async () => {
    const { getByRole } = await render(
      <Controlled onOpenChange={handleOpenChange} />,
    )

    // close
    await getByRole('button').click()
    expect(handleOpenChange).toHaveBeenCalledExactlyOnceWith(false)

    // open
    await getByRole('button').click()
    expect(handleOpenChange).toHaveBeenCalledExactlyOnceWith(false)
  })
})
