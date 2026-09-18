import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import styles from './Logo.module.css'
import * as stories from './Logo.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '../utils/intl'

const { Primary } = composeStories(stories)

describe('given a primary Logo', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { container } = await render(<Primary className='test' />)

    await expect
      .element(container.querySelector(`.${styles.container}`) as HTMLElement)
      .toHaveClass('test')
  })
})

describe('given a Swedish locale', async () => {
  it('renders the accessible label with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Primary />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Migrationsverkets logotyp')
  })
})
