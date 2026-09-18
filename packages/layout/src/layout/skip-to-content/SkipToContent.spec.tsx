import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { I18nProvider } from 'react-aria-components'
import { SkipToContent } from './SkipToContent'

describe('given a Swedish locale', () => {
  it('renders the skip-link with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <SkipToContent />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Hoppa till huvudinnehåll')
  })
})
