import { afterEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { House } from 'lucide-react'
import { NavigationLink } from './NavigationLink'

describe('NavigationLink active state', () => {
  it('should set data-active when isActive is true', async () => {
    await render(
      <NavigationLink
        href='/app'
        icon={<House />}
        isActive
      >
        Test Link
      </NavigationLink>,
    )

    await expect.element(page.getByRole('link')).toHaveAttribute('data-active')
  })

  it('should NOT set data-active when isActive is false', async () => {
    await render(
      <NavigationLink
        href='/app'
        icon={<House />}
        isActive={false}
      >
        Test Link
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .not.toHaveAttribute('data-active')
  })

  it('should NOT set data-active when isActive is undefined', async () => {
    await render(
      <NavigationLink
        href='/app'
        icon={<House />}
      >
        Test Link
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .not.toHaveAttribute('data-active')
  })

  it('should set aria-current="page" when isActive', async () => {
    await render(
      <NavigationLink
        href='/app'
        icon={<House />}
        isActive
      >
        Test Link
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('aria-current', 'page')
  })

  it('should render link with correct href', async () => {
    await render(
      <NavigationLink
        href='/test-path'
        icon={<House />}
      >
        Test Link
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('href', '/test-path')
  })

  it('should render with an explicit aria-label', async () => {
    await render(
      <NavigationLink
        href='/app'
        icon={<House />}
        aria-label='Test Link'
      >
        <span>Link</span>
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('aria-label', 'Test Link')
  })
})

describe('NavigationLink with external target', () => {
  it('should preserve target="_blank" on external links', async () => {
    await render(
      <NavigationLink
        href='https://example.com'
        icon={<House />}
        target='_blank'
      >
        External Link
      </NavigationLink>,
    )

    await expect
      .element(page.getByRole('link'))
      .toHaveAttribute('target', '_blank')
  })
})

describe('NavigationLink with onPress handler', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should call the press handler when clicked', async () => {
    const handlePress = vi.fn()

    await render(
      <NavigationLink
        href='#'
        icon={<House />}
        onPress={handlePress}
      >
        Test Link
      </NavigationLink>,
    )

    await page.getByRole('link').click()

    expect(handlePress).toHaveBeenCalledOnce()
  })
})
