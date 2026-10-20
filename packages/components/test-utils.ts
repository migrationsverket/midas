import { render as baseRender } from 'vitest-browser-react'
import { server, userEvent } from 'vitest/browser'

/**
 * Under WebdriverIO, tabbing past the last element moves focus out of the
 * page into the browser's own UI, and no click or `focus()` brings it back,
 * which breaks the keyboard tests after it. A last focusable element keeps
 * focus in the page, and the element before it is still blurred.
 */
const lastFocusable = document.createElement('div')
lastFocusable.tabIndex = 0
lastFocusable.id = '__vitest_last_focusable__'

/**
 * Custom render wrapper that establishes Playwright CDP focus in the browser
 * iframe after rendering. Without this, userEvent.tab() in headed mode may
 * focus browser chrome instead of the page content.
 *
 * Inserts a temporary element inside the rendered container and clicks it
 * via CDP to bring page focus into the iframe, then removes it.
 */
export async function render(
  ...args: Parameters<typeof baseRender>
): ReturnType<typeof baseRender> {
  const result = await baseRender(...args)
  // Each render adds its container last, so move the element after it
  if (server.provider === 'webdriverio') document.body.append(lastFocusable)
  const focusTarget = document.createElement('div')
  focusTarget.id = '__vitest_focus_init__'
  focusTarget.style.cssText =
    'position:fixed;right:0;bottom:0;z-index:2147483647;width:4px;height:4px;overflow:hidden'
  result.container.prepend(focusTarget)
  await userEvent.click(focusTarget)
  focusTarget.remove()
  return result
}
