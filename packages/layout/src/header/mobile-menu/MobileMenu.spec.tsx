import { describe, expect, it, beforeEach } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { I18nProvider } from 'react-aria-components'
import * as stories from './MobileMenu.stories'

const { Primary, Controlled } = composeStories(stories)

describe('MobileMenu', () => {
  beforeEach(({ skip, task }) => {
    skip(
      task.file.projectName === 'desktop',
      'MobileMenu is only relevant for mobile',
    )
  })

  describe('given an uncontrolled MobileMenu', async () => {
    it('should be possible to open and close', async () => {
      const { getByRole } = await render(<Primary />)
      await getByRole('button', { name: 'Open menu' }).click()
      const dismissButton = getByRole('button', { name: 'Dismiss' })
      await expect.element(dismissButton).toBeVisible()
      await userEvent.keyboard('[Escape]')
      await expect.element(dismissButton).not.toBeInTheDocument()
    })
  })

  describe('given a controlled MobileMenu', async () => {
    it('should be possible to open and close', async () => {
      const { getByRole } = await render(<Controlled />)
      await getByRole('button', { name: 'Open menu' }).click()
      const dismissButton = getByRole('button', { name: 'Dismiss' })
      await expect.element(dismissButton).toBeVisible()
      await userEvent.keyboard('[Escape]')
      await expect.element(dismissButton).not.toBeInTheDocument()
    })
  })

  describe('given a Swedish locale', async () => {
    it('renders the trigger button with Swedish text', async () => {
      const { getByRole } = await render(
        <I18nProvider locale='sv'>
          <Primary />
        </I18nProvider>,
      )

      await expect
        .element(getByRole('button', { name: 'Öppna meny' }))
        .toBeVisible()
    })
  })
})
