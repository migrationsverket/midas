import { afterEach, describe, expect, it, vi } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ColorSchemeSwitchMenu.stories'
import { render } from '../../test-utils'
import { ColorSchemeSwitchMenu } from './ColorSchemeSwitchMenu'

const { Primary } = composeStories(stories)

afterEach(() => {
  delete document.documentElement.dataset.colorScheme
})

describe('given a primary ColorSchemeSwitchMenu', () => {
  it('should open the menu when the trigger is clicked', async () => {
    await render(<Primary />)
    await userEvent.click(page.getByRole('button', { name: 'System Setting' }))
    await expect.element(page.getByRole('menu')).toBeVisible()
  })

  it('should set light color scheme when Light Mode is selected', async () => {
    await render(<Primary />)
    await userEvent.click(page.getByRole('button', { name: 'System Setting' }))
    await userEvent.click(page.getByRole('menuitem', { name: 'Light Mode' }))
    expect(document.documentElement.dataset.colorScheme).toBe('light')
  })

  it('should set dark color scheme when Dark Mode is selected', async () => {
    await render(<Primary />)
    await userEvent.click(page.getByRole('button', { name: 'System Setting' }))
    await userEvent.click(page.getByRole('menuitem', { name: 'Dark Mode' }))
    expect(document.documentElement.dataset.colorScheme).toBe('dark')
  })

  it('should remove data-colorScheme when System Setting is selected', async () => {
    await render(<ColorSchemeSwitchMenu defaultScheme='light' />)
    await userEvent.click(page.getByRole('button', { name: 'Light Mode' }))
    await userEvent.click(page.getByRole('menuitem', { name: 'System Setting' }))
    expect(document.documentElement.dataset.colorScheme).toBeUndefined()
  })
})

describe('given a ColorSchemeSwitchMenu with onSchemeChange', () => {
  it('should call onSchemeChange with the selected scheme', async () => {
    const onSchemeChange = vi.fn()
    await render(<ColorSchemeSwitchMenu onSchemeChange={onSchemeChange} />)
    await userEvent.click(page.getByRole('button', { name: 'System Setting' }))
    await userEvent.click(page.getByRole('menuitem', { name: 'Light Mode' }))
    expect(onSchemeChange).toHaveBeenCalledWith('light')
  })
})
