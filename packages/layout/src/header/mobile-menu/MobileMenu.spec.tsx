import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'
import { MobileMenu } from './MobileMenu'
import { useState } from 'react'

describe('given an uncontrolled MobileMenu', async () => {
  it('should be possible to open and close', async () => {
    const { getByRole } = await render(<MobileMenu />)
    await getByRole('button', { name: 'Open menu' }).click()
    const dismissButton = getByRole('button', { name: 'Dismiss' })
    await expect.element(dismissButton).toBeVisible()
    await userEvent.keyboard('[Escape]')
    await expect.element(dismissButton).not.toBeInTheDocument()
  })
})

const ControlledMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileMenu
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    />
  )
}

describe('given a controlled MobileMenu', async () => {
  it('should be possible to open and close', async () => {
    const { getByRole } = await render(<ControlledMobileMenu />)
    await getByRole('button', { name: 'Open menu' }).click()
    const dismissButton = getByRole('button', { name: 'Dismiss' })
    await expect.element(dismissButton).toBeVisible()
    await userEvent.keyboard('[Escape]')
    await expect.element(dismissButton).not.toBeInTheDocument()
  })
})
