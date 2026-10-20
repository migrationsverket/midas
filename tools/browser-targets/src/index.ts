import browserslist from 'browserslist'
import { getAllVersions } from 'baseline-browser-mapping'

/** The browserslist browsers Vite's build target can name */
const targetNames: Record<string, string> = {
  chrome: 'chrome',
  and_chr: 'chrome',
  edge: 'edge',
  firefox: 'firefox',
  and_ff: 'firefox',
  safari: 'safari',
  ios_saf: 'ios',
}

type Release = Extract<ReturnType<typeof getAllVersions>, unknown[]>[number]

/** The Chromium versions of Samsung Internet's releases */
const samsungChromium = () =>
  new Map(
    (
      getAllVersions({
        includeDownstreamBrowsers: true,
        outputFormat: 'array',
      }) as Release[]
    )
      .filter(release => release.browser === 'samsunginternet_android')
      .map(release => [parseInt(release.version), release.engine_version]),
  )

const compareVersions = (a: string, b: string) => {
  const [as, bs] = [a, b].map(version => version.split('.').map(Number))
  for (let i = 0; i < Math.max(as.length, bs.length); i++) {
    const difference = (as[i] ?? 0) - (bs[i] ?? 0)
    if (difference !== 0) return difference
  }
  return 0
}

/** The browsers in the root `.browserslistrc`, e.g. `['chrome 154', ...]` */
export const supportedBrowsers = () =>
  browserslist(undefined, { path: import.meta.dirname })

/**
 * Vite's `build.target` for the browsers in the root `.browserslistrc`. Vite
 * also uses it for the CSS, through Lightning CSS.
 *
 * Vite only knows the engines, so Chrome on Android is Chrome, and Samsung
 * Internet is the Chromium version it's built on. Each gets its oldest
 * version, e.g. `['chrome136', 'edge151', 'firefox157', 'ios26.0']`.
 */
export const buildTarget = (browsers = supportedBrowsers()): string[] => {
  let samsung: ReturnType<typeof samsungChromium> | undefined
  const oldest = new Map<string, string>()

  for (const entry of browsers) {
    const [browser, versions] = entry.split(' ')
    // iOS versions can be ranges, e.g. `18.5-18.7`
    let version = versions.split('-')[0]
    let name = targetNames[browser]

    if (browser === 'samsung') {
      samsung ??= samsungChromium()
      const chromium = samsung.get(parseInt(version))
      if (!chromium) {
        throw new Error(
          `Unknown Chromium version of Samsung Internet ${version}, update baseline-browser-mapping`,
        )
      }
      name = 'chrome'
      version = chromium
    }

    if (!name) {
      throw new Error(
        `Vite can't target ${entry} from .browserslistrc, see tools/browser-targets`,
      )
    }

    const current = oldest.get(name)
    if (!current || compareVersions(version, current) < 0) {
      oldest.set(name, version)
    }
  }

  return [...oldest].map(([name, version]) => `${name}${version}`)
}
