import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Spinner.stories'
import styles from './Spinner.module.css'
import { render } from '../../test-utils'
import { I18nProvider } from '@midas-ds/utils'

const { Primary } = composeStories(stories)

describe('given a primary Spinner', async () => {
  it('should accept custom classNames', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('status'))
      .toHaveClass(styles.container, Primary.args.className as string)
  })
})

describe('given a Swedish locale', async () => {
  it('renders the visually hidden status text with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <Primary />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Laddar, vänligen vänta...')
  })
})
