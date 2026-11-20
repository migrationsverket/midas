import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import type { ReactElement } from 'react'
import { render as renderWithFocus } from '../../test-utils'
import { I18nProvider } from '../aria'
import * as stories from './CopyButton.stories'
import { CopyButton } from './CopyButton'

const { Primary, WithText, Details } = composeStories(stories)

// The built-in texts are asserted in Swedish, whatever the browser's locale
const render = (ui: ReactElement) =>
  renderWithFocus(<I18nProvider locale='sv'>{ui}</I18nProvider>)

let writeText: ReturnType<typeof vi.fn>

beforeEach(() => {
  writeText = vi.fn().mockResolvedValue(undefined)
  vi.spyOn(navigator, 'clipboard', 'get').mockReturnValue({
    writeText,
  } as unknown as Clipboard)
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('given a CopyButton', () => {
  it('is named "Kopiera" when it shows only an icon', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('button', { name: 'Kopiera' }))
      .toBeInTheDocument()
  })

  it('copies its value when pressed', async () => {
    const { getByRole } = await render(<Primary />)

    await userEvent.click(getByRole('button'))

    expect(writeText).toHaveBeenCalledWith('1234-56789')
  })

  it('tells screen readers the value is copied', async () => {
    const { getByRole } = await render(<Primary />)

    await expect.element(getByRole('status')).toHaveTextContent('')
    await userEvent.click(getByRole('button'))

    await expect.element(getByRole('status')).toHaveTextContent('Kopierat')
  })

  it('shows its name in a tooltip, and says "Kopierat" there once pressed', async () => {
    const { getByRole } = await render(<Primary />)

    await userEvent.hover(getByRole('button'))
    await expect.element(getByRole('tooltip')).toHaveTextContent('Kopiera')

    await userEvent.click(getByRole('button'))
    await expect.element(getByRole('tooltip')).toHaveTextContent('Kopierat')
  })

  it('also says it in the button when it has text', async () => {
    const { getByRole } = await render(<WithText />)

    await userEvent.click(getByRole('button', { name: 'Kopiera' }))

    await expect
      .element(getByRole('button', { name: 'Kopierat' }))
      .toBeInTheDocument()
  })

  it('goes back to idle after resetAfter', async () => {
    const { getByRole } = await render(
      <CopyButton
        value='1234'
        resetAfter={50}
      />,
    )

    await userEvent.click(getByRole('button'))
    await expect.element(getByRole('status')).toHaveTextContent('Kopierat')

    await expect.element(getByRole('status')).toHaveTextContent('')
  })

  it('says so, and calls onCopyError, when the browser refuses', async () => {
    const error = new DOMException('Denied', 'NotAllowedError')
    writeText.mockRejectedValue(error)
    const onCopyError = vi.fn()
    const { getByRole } = await render(
      <CopyButton
        value='1234'
        onCopyError={onCopyError}
      />,
    )

    await userEvent.click(getByRole('button'))

    await expect
      .element(getByRole('status'))
      .toHaveTextContent('Kunde inte kopiera')
    expect(onCopyError).toHaveBeenCalledWith(error)
  })

  it('calls onCopy with the value', async () => {
    const onCopy = vi.fn()
    const { getByRole } = await render(
      <CopyButton
        value='1234'
        onCopy={onCopy}
      />,
    )

    await userEvent.click(getByRole('button'))

    await vi.waitFor(() => expect(onCopy).toHaveBeenCalledWith('1234'))
  })

  it('names each button after its value when there are several', async () => {
    const { getByRole } = await render(<Details />)

    await expect
      .element(getByRole('button', { name: 'Kopiera ärendenummer' }))
      .toBeInTheDocument()
  })
})
