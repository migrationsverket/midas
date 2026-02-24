import { render as baseRender } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'

/**
 * Custom render wrapper that establishes Playwright CDP focus in the browser
 * iframe after rendering. Without this, userEvent.tab() in headed mode may
 * focus browser chrome instead of the page content.
 *
 * Appends a temporary button to document.body (outside the React container)
 * and clicks it to bring page focus into the iframe. Using a real focusable
 * element outside the React tree avoids triggering React's event system.
 */
export async function render(
  ...args: Parameters<typeof baseRender>
): ReturnType<typeof baseRender> {
  const result = await baseRender(...args)
  const focusTarget = document.createElement('button')
  focusTarget.style.cssText =
    'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0'
  document.body.prepend(focusTarget)
  await userEvent.click(focusTarget)
  focusTarget.remove()
  return result
}
