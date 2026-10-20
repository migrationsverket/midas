/**
 * Downloads the browsers and drivers for the `<browser>@<version>` profiles in
 * `MIDAS_BROWSERS`, before the tests run:
 *
 *   MIDAS_BROWSERS=chrome@155 node tools/test-browsers/src/install.ts
 *
 * WebdriverIO downloads them when a test run opens the browser, but Nx tests
 * the packages in parallel, and their downloads into the same cache directory
 * race: one finds the driver another is still unpacking, and fails. Once
 * downloaded, every run uses the cached ones.
 */
import { setupBrowser, setupDriver } from '@wdio/utils/node'
import { realBrowserCapabilities } from './index.ts'

const capabilities = realBrowserCapabilities()

// The drivers are resolved from the browser versions, so browsers first
await setupBrowser({}, capabilities)
await setupDriver({}, capabilities)
