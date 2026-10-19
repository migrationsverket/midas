import { describe, expect, it } from 'vitest'
import { page } from 'vitest/browser'
import { FileTrigger } from './FileTrigger'
import { Button } from '../button'
import buttonStyles from '../button/Button.module.css'
import { render } from '../../test-utils'

describe('Given a FileTrigger', () => {
  it('should render its button as secondary by default', async () => {
    await render(
      <FileTrigger>
        <Button>Välj fil</Button>
      </FileTrigger>,
    )

    await expect
      .element(page.getByRole('button', { name: 'Välj fil' }))
      .toHaveClass(buttonStyles.secondary)
  })

  it('should let an explicit variant override the default', async () => {
    await render(
      <FileTrigger>
        <Button variant='primary'>Välj fil</Button>
      </FileTrigger>,
    )

    const button = page.getByRole('button', { name: 'Välj fil' })
    await expect.element(button).toHaveClass(buttonStyles.primary)
    await expect.element(button).not.toHaveClass(buttonStyles.secondary)
  })
})
