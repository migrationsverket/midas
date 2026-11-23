import { resolve } from 'node:path'
import type { BrowserCommand } from 'vitest/node'
import type {} from '@vitest/browser-webdriverio'

/**
 * Sets a file input to a file on disk, given relative to the project root,
 * under WebdriverIO. Vitest's `upload` first copies the file to the driver
 * with a command only Chrome's and Edge's drivers have, so it fails in
 * Firefox. The driver runs on this machine, so the input can take the local
 * path directly.
 */
const setInputFile: BrowserCommand<[selector: string, path: string]> = async (
  context,
  selector,
  path,
) => {
  if (context.provider.name !== 'webdriverio') {
    throw new Error('setInputFile only runs with the webdriverio provider')
  }
  await context.browser
    .$(selector)
    .addValue(resolve(context.project.config.root, path))
}

/** Custom Vitest browser commands, for `test.browser.commands` */
export const browserCommands = { setInputFile }

declare module 'vitest/browser' {
  interface BrowserCommands {
    setInputFile: (selector: string, path: string) => Promise<void>
  }
}
