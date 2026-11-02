import { afterEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Link.stories'
import { render } from '../../test-utils'
import { userEvent } from 'vitest/browser'
import { I18nProvider } from '../utils/intl'
import { Link } from './Link'
import { LinkContext } from './LinkContext'

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

describe('given a Link inside a LinkContext', async () => {
  it('should use the props from context', async () => {
    const { getByRole } = await render(
      <LinkContext.Provider value={{ standalone: true, className: 'ctx' }}>
        <Link href='#'>Länk</Link>
      </LinkContext.Provider>,
    )
    const link = getByRole('link').element()
    expect(link.querySelector('svg')).not.toBeNull()
    expect(link.classList).toContain('ctx')
  })

  it('should let its own props take precedence', async () => {
    const { getByRole } = await render(
      <LinkContext.Provider value={{ standalone: true }}>
        <Link
          href='#'
          standalone={false}
        >
          Länk
        </Link>
      </LinkContext.Provider>,
    )
    expect(getByRole('link').element().querySelector('svg')).toBeNull()
  })

  it('should pass the props from context to a custom component', async () => {
    const CustomLink = (props: React.ComponentProps<'a'>) => (
      <a
        {...props}
        data-custom
      >
        {props.children}
      </a>
    )
    const { getByRole } = await render(
      <LinkContext.Provider value={{ standalone: true, className: 'ctx' }}>
        <Link
          as={CustomLink}
          href='#'
        >
          Länk
        </Link>
      </LinkContext.Provider>,
    )
    const link = getByRole('link').element()
    expect(link.hasAttribute('data-custom')).toBe(true)
    expect(link.classList).toContain('ctx')
    expect(link.querySelector('svg')).not.toBeNull()
  })
})
