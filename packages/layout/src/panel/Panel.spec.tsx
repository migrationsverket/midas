import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import * as stories from './Panel.stories'
import styles from './PanelRegion.module.css'

const {
  Controlled,
  WithActions,
  BehaviorReplace,
  BehaviorBringToFront,
  BehaviorPopTo,
  VariantPush,
} = composeStories(stories)

describe('given a controlled Panel', () => {
  it('should open when the open button is pressed', async () => {
    const { getByRole } = await render(<Controlled />)
    await expect.element(getByRole('complementary')).not.toBeInTheDocument()
    await userEvent.click(getByRole('button', { name: 'Open panel' }))
    await expect.element(getByRole('complementary')).toBeVisible()
  })

  it('should close when the dismiss button is pressed', async () => {
    const { getByRole } = await render(<Controlled />)
    await userEvent.click(getByRole('button', { name: 'Open panel' }))
    await expect.element(getByRole('complementary')).not.toHaveAttribute('data-entering')
    await userEvent.click(getByRole('button', { name: 'Dismiss panel' }))
    await expect.element(getByRole('complementary')).not.toBeInTheDocument()
  })

  it('should close when the panel close button is pressed', async () => {
    const { getByRole } = await render(<Controlled />)
    await userEvent.click(getByRole('button', { name: 'Open panel' }))
    await userEvent.click(getByRole('button', { name: 'Close panel' }))
    await expect.element(getByRole('complementary')).not.toBeInTheDocument()
  })
})

describe('given a Panel with actions', () => {
  it('should render the actions in the header', async () => {
    const { getByRole } = await render(<WithActions />)
    await expect
      .element(getByRole('button', { name: 'More options' }))
      .toBeVisible()
  })
})

describe('given a PanelProvider with replace behavior', () => {
  it('should close the existing panel when a new one is opened', async () => {
    const { getByRole } = await render(<BehaviorReplace />)

    await userEvent.click(getByRole('button', { name: 'Open Panel A' }))
    await expect
      .element(getByRole('complementary', { name: 'Panel A' }))
      .toBeVisible()

    await userEvent.click(getByRole('button', { name: 'Open Panel B' }))
    await expect
      .element(getByRole('complementary', { name: 'Panel B' }))
      .toBeVisible()
    await expect
      .element(getByRole('complementary', { name: 'Panel A' }))
      .not.toBeInTheDocument()
  })
})

describe('given a PanelProvider with bring-to-front behavior', () => {
  it('should keep existing panels in the DOM when a new one is opened', async () => {
    const { getByRole, container } = await render(<BehaviorBringToFront />)

    await userEvent.click(getByRole('button', { name: 'Open Panel A' }))
    await userEvent.click(getByRole('button', { name: 'Open Panel B' }))

    expect(container.querySelectorAll('aside')).toHaveLength(2)
    await expect
      .element(getByRole('complementary', { name: 'Panel B' }))
      .toBeVisible()
  })
})

describe('given a PanelProvider with pop-to behavior', () => {
  it('should close panels opened after the target when it is reopened', async () => {
    const { getByRole } = await render(<BehaviorPopTo />)

    await userEvent.click(getByRole('button', { name: 'Open Panel A' }))
    await userEvent.click(getByRole('button', { name: 'Open Panel B' }))
    await expect
      .element(getByRole('complementary', { name: 'Panel B' }))
      .toBeVisible()

    await userEvent.click(getByRole('button', { name: 'Open Panel A' }))
    await expect
      .element(getByRole('complementary', { name: 'Panel A' }))
      .toBeVisible()
    await expect
      .element(getByRole('complementary', { name: 'Panel B' }))
      .not.toBeInTheDocument()
  })
})

describe('given a PanelProvider with push variant', () => {
  it('should apply push styles to the region when a panel is open', async () => {
    const { getByRole, container } = await render(<VariantPush />)

    const region = container.querySelector(`.${styles.push}`) as HTMLElement
    expect(region).toBeTruthy()
    expect(region.dataset.open).toBeUndefined()

    await userEvent.click(getByRole('button', { name: 'Open Panel A' }))
    expect(region.dataset.open).toBe('true')
  })
})
