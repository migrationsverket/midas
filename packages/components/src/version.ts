// A named import, so only the version string is bundled, not the whole
// package.json
import { version } from '../package.json'

export const VERSION = version
