import { describe, expect, it, beforeEach } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { I18nProvider } from '@midas-ds/components'
import * as stories from './MobileMenu.stories'
import * as headerStories from '../Header.stories'

const { Primary, Controlled, PlacementRight, LabelHidden, Vertical } =
  composeStories(stories)
const { MobileMenuRight, MobileMenuRightWithoutActions } =
  composeStories(headerStories)

const openDrawer = async (
  getByRole: Awaited<ReturnType<typeof render>>['getByRole'],
) => {
  await getByRole('button', { name: 'Menu' }).click()
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
      await getByRole('button', { name: 'Menu' }).click()
      const dismissButton = getByRole('button', { name: 'Dismiss' })
      await expect.element(dismissButton).toBeVisible()
      await userEvent.keyboard('[Escape]')
      await expect.element(dismissButton).not.toBeInTheDocument()
    })
  })

  describe('given a controlled MobileMenu', async () => {
    it('should be possible to open and close', async () => {
      const { getByRole } = await render(<Controlled />)
      await getByRole('button', { name: 'Menu' }).click()
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
        .element(getByRole('button', { name: 'Meny' }))
        .toBeVisible()
    })
  })

  describe('given the default trigger', async () => {
    it('shows the label next to the icon', async () => {
      const { getByRole, getByText } = await render(<Primary />)
      const trigger = getByRole('button', { name: 'Menu' })
      await expect.element(getByText('Menu')).toBeVisible()
      await expect
        .element(trigger)
        .toHaveAttribute('data-orientation', 'horizontal')
      expect(getComputedStyle(trigger.element()).flexDirection).toBe('row')
    })

    it('takes a custom label', async () => {
      const { getByRole } = await render(<Primary label='Navigering' />)
      await expect
        .element(getByRole('button', { name: 'Navigering' }))
        .toBeVisible()
    })
  })

  describe('given hideLabel', async () => {
    it('shows only the icon, but keeps the accessible name', async () => {
      const { getByRole, getByText } = await render(<LabelHidden />)
      const trigger = getByRole('button', { name: 'Menu' })
      await expect.element(trigger).toHaveAttribute('data-icon-only')
      expect(getByText('Menu').query()).toBeNull()
      const { width, height } = trigger.element().getBoundingClientRect()
      expect(width).toBe(40)
      expect(height).toBe(40)
    })
  })

  describe('given orientation="vertical"', async () => {
    it('places the label below the icon', async () => {
      const { getByRole } = await render(<Vertical />)
      const trigger = getByRole('button', { name: 'Menu' })
      await expect
        .element(trigger)
        .toHaveAttribute('data-orientation', 'vertical')
      expect(getComputedStyle(trigger.element()).flexDirection).toBe('column')
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
      const trigger = getByRole('button', { name: 'Menu' })
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
      const trigger = getByRole('button', { name: 'Menu' })
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
