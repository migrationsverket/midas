import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import styles from './Layout.module.css'
import * as stories from './Layout.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '@midas-ds/utils'

const { Primary, Navbar } = composeStories(stories)

describe('given a primary Layout', async () => {
  it('should use accept a custom className', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.baseLayout}`) as HTMLElement)
      .toHaveClass(styles.baseLayout, Primary.args.className as string)
  })

  it('should be possible to skip to content (DS1375)', async () => {
    const { getByRole } = await render(<Primary />)

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(getByRole('main')).toHaveFocus()
  })
})

describe('given a Swedish locale', async () => {
  it('renders the skip-link and header menu button with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Primary />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Hoppa till huvudinnehåll')
    expect(container.innerHTML).toContain('Öppna meny')
  })

  it('renders the navbar with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Navbar />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Bottenmeny')
  })
})
