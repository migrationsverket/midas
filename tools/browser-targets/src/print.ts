/**
 * Prints the supported browsers and the build target they give:
 *
 *   npx nx run browser-targets:print
 */
import { buildTarget, supportedBrowsers } from './index.ts'

const browsers = supportedBrowsers()
console.log(`Browsers: ${browsers.join(', ')}`)
console.log(`Build target: ${buildTarget(browsers).join(', ')}`)
