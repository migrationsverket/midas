import { render as baseRender } from 'vitest-browser-react'
import { commands, server, userEvent, type Locator } from 'vitest/browser'

/**
 * Uploads a file with the given name and contents to a file input.
 *
 * WebdriverIO can only upload files from disk, not `File` objects, so the
 * file is written to the gitignored `tmp` folder first, in a folder per
 * browser as the browser instances run at the same time. The browser takes
 * the file's type from its extension. Vitest's `upload` fails in Firefox
 * under WebdriverIO, so that sets the input with a custom command instead.
 */
export async function uploadFile(
  input: Locator,
  name: string,
  contents: string,
): Promise<void> {
  const path = `tmp/uploads/${server.browser}/${name}`
  await commands.writeFile(path, contents)
  try {
    if (server.provider === 'webdriverio') {
      await commands.setInputFile(input.selector, path)
    } else {
      await userEvent.upload(input, path)
    }
  } finally {
    await commands.removeFile(path)
  }
}

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
