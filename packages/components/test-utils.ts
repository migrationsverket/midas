import { render as baseRender } from 'vitest-browser-react'
import { userEvent } from 'vitest/browser'

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
  const focusTarget = document.createElement('div')
  focusTarget.id = '__vitest_focus_init__'
  focusTarget.style.cssText = 'width:4px;height:4px;overflow:hidden'
  result.container.prepend(focusTarget)
  await userEvent.click(focusTarget)
  focusTarget.remove()
  return result
}
