import { afterEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Link.stories'
import { render } from '../../test-utils'
import { userEvent } from 'vitest/browser'
import { I18nProvider } from '../utils/intl'

const { PrimaryDisabled, ExternalLink, DownloadLink } = composeStories(stories)

describe('given a link that opens in a new tab', async () => {
  it('should include visually hidden text for the new tab icon', async () => {
    const { getByText } = await render(<ExternalLink />)
    expect(getByText('Opens in new tab')).toBeDefined()
  })

  it('should hide the icon from the accessibility tree', async () => {
    const { container } = await render(<ExternalLink />)
    const icon = container.querySelector('svg')
    expect(icon?.getAttribute('aria-hidden')).toBe('true')
  })
})

describe('given a Swedish locale', async () => {
  it('renders the new-tab and download hidden text in Swedish', async () => {
    const { container: externalContainer } = await render(
      <I18nProvider locale='sv'>
        <ExternalLink />
      </I18nProvider>,
    )
    expect(externalContainer.innerHTML).toContain('Öppnas i ny flik')

    const { container: downloadContainer } = await render(
      <I18nProvider locale='sv'>
        <DownloadLink />
      </I18nProvider>,
    )
    expect(downloadContainer.innerHTML).toContain('Hämtar fil')
  })
})

describe('given a disabled link', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should not be pressable', async () => {
    const handleClick = vi.fn()
    await render(<PrimaryDisabled onPress={handleClick} />)

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handleClick).not.toHaveBeenCalled()
  })
})
