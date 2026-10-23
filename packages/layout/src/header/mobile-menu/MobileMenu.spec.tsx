import { describe, expect, it, beforeEach } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { I18nProvider } from 'react-aria-components'
import * as stories from './MobileMenu.stories'
import * as headerStories from '../Header.stories'

const { Primary, Controlled, PlacementRight } = composeStories(stories)
const { MobileMenuRight, MobileMenuRightWithoutActions } =
  composeStories(headerStories)

const openDrawer = async (
  getByRole: Awaited<ReturnType<typeof render>>['getByRole'],
) => {
  await getByRole('button', { name: 'Open menu' }).click()
  const drawer = getByRole('dialog').element().parentElement as HTMLElement
  // Wait for the slide-in animation to settle
  await expect
    .poll(() => drawer.getAnimations().length, { timeout: 2000 })
    .toBe(0)
  return drawer.getBoundingClientRect()
}

describe('MobileMenu', () => {
  beforeEach(({ skip, task }) => {
    skip(
      task.file.projectName.startsWith('desktop'),
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

  describe('given the default placement', async () => {
    it('opens the drawer from the left edge', async () => {
      const { getByRole } = await render(<Primary />)
      const drawer = await openDrawer(getByRole)
      expect(drawer.left).toBe(0)
    })
  })

  describe('given placement="right"', async () => {
    it('opens the drawer from the right edge', async () => {
      const { getByRole } = await render(<PlacementRight />)
      const drawer = await openDrawer(getByRole)
      expect(drawer.right).toBe(document.documentElement.clientWidth)
      expect(drawer.left).toBeGreaterThan(0)
    })

    it('places the trigger directly after HeaderActions', async () => {
      const { getByRole } = await render(<MobileMenuRight />)
      const trigger = getByRole('button', { name: 'Open menu' })
        .element()
        .getBoundingClientRect()
      const lastAction = getByRole('button', { name: 'Min profil' })
        .element()
        .getBoundingClientRect()
      expect(trigger.left).toBeCloseTo(lastAction.right, 0)
    })

    it('pushes the trigger to the end of the Header without HeaderActions', async () => {
      const { getByRole } = await render(<MobileMenuRightWithoutActions />)
      const header = getByRole('banner').element()
      const trigger = getByRole('button', { name: 'Open menu' })
        .element()
        .getBoundingClientRect()
      const paddingEnd = parseFloat(getComputedStyle(header).paddingInlineEnd)
      // The trigger bleeds into the padding, like the left-placed one does
      expect(trigger.right).toBeGreaterThan(
        header.getBoundingClientRect().right - paddingEnd,
      )
    })
  })
})
