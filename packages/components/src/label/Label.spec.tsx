import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Label.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '../utils/intl'
import { InfoPopover } from './InfoPopover'

const { Primary } = composeStories(stories)

describe('given a primary Label', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Primary />)

    await expect
      .element(getByText(Primary.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: '500',
      })
  })
})

describe('given a Swedish locale', async () => {
  it('renders the InfoPopover trigger with Swedish text when no aria-label is given', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <InfoPopover>More info here</InfoPopover>
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Mer information')
  })
})
