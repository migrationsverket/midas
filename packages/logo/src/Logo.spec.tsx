import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { I18nProvider } from 'react-aria-components'
import styles from './Logo.module.css'
import * as stories from './Logo.stories'
import { render } from 'vitest-browser-react'

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
