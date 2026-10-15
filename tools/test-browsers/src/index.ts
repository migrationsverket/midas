import { playwright } from '@vitest/browser-playwright'
import { webdriverio } from '@vitest/browser-webdriverio'
import { devices } from 'playwright'
import type { BrowserInstanceOption } from 'vitest/node'

interface Profile {
  browser: 'chromium' | 'firefox' | 'webkit'
  /** A Playwright device descriptor, for touch, user agent and viewport */
  device?: keyof typeof devices
  /**
   * Overrides the package's test timeout. The packages time tests for
   * Chromium, and the other profiles run about twice as slow on CI runners
   */
  testTimeout?: number
}

const slowTestTimeout = 5000

/** Playwright's builds of each engine, see the README */
const profiles = {
  chromium: { browser: 'chromium' },
  firefox: { browser: 'firefox', testTimeout: slowTestTimeout },
  webkit: { browser: 'webkit', testTimeout: slowTestTimeout },
  'mobile-safari': {
    browser: 'webkit',
    device: 'iPhone 15',
    testTimeout: slowTestTimeout,
  },
  'mobile-chrome': {
    browser: 'chromium',
    device: 'Pixel 7',
    testTimeout: slowTestTimeout,
  },
} satisfies Record<string, Profile>

const realBrowsers = ['chrome', 'firefox', 'edge'] as const

/**
 * A branded browser in a given version, run through WebdriverIO, which
 * downloads it: `<browser>@<version>`, e.g. `chrome@141`, `chrome@stable`,
 * `firefox@stable` or `firefox@stable_157.0.2`. For Edge only the driver is
 * downloaded, so the version must be the installed one, e.g. `edge@stable` or
 * `edge@154.0.4258.62`
 */
const parseRealProfile = (name: string) => {
  const [browser, version, ...rest] = name.split('@')
  if (!version || rest.length > 0) return undefined
  if (!realBrowsers.includes(browser as (typeof realBrowsers)[number])) {
    return undefined
  }
  return { browser: browser as (typeof realBrowsers)[number], version }
}

const isProfile = (name: string) =>
  name in profiles || parseRealProfile(name) !== undefined

/**
 * The profiles to run, from `MIDAS_BROWSERS`: a comma separated list of
 * profile names, or `all` for the Playwright profiles. Defaults to Chromium.
 */
export const selectedProfiles = (
  value = process.env.MIDAS_BROWSERS,
): string[] => {
  if (!value?.trim()) return ['chromium']
  if (value.trim() === 'all') return Object.keys(profiles)

  const names = value.split(',').map(name => name.trim())
  const unknown = names.filter(name => !isProfile(name))
  if (unknown.length > 0) {
    throw new Error(
      `Unknown MIDAS_BROWSERS profile: ${unknown.join(', ')}. Use any of ${Object.keys(profiles).join(', ')}, all, or <${realBrowsers.join('|')}>@<version>.`,
    )
  }
  return names
}

const toInstance = (
  profileName: string,
  variant: Partial<BrowserInstanceOption>,
  /** Add the profile to the name, when running several profiles */
  suffix: boolean,
): BrowserInstanceOption => {
  // Vitest needs a unique name per instance, and two profiles can share an
  // engine. A single profile keeps the variant's name as is
  const name = !suffix
    ? variant.name
    : variant.name
      ? `${variant.name} (${profileName})`
      : profileName

  const real = parseRealProfile(profileName)
  if (real) {
    return {
      testTimeout: slowTestTimeout,
      ...variant,
      browser: real.browser,
      name,
      provider: webdriverio({
        capabilities: { browserVersion: real.version },
      }),
    }
  }

  const profile: Profile = profiles[profileName as keyof typeof profiles]
  const instance: BrowserInstanceOption = {
    ...(profile.testTimeout && { testTimeout: profile.testTimeout }),
    ...variant,
    browser: profile.browser,
    name,
  }

  if (!profile.device) return instance

  // The device's viewport sizes the test iframe, unless the variant sets one.
  // The rest (touch, user agent, scale) goes to the page context
  const { viewport, ...contextOptions } = devices[profile.device]
  return {
    ...instance,
    viewport: variant.viewport ?? viewport,
    provider: playwright({ contextOptions }),
  }
}

/**
 * The browser provider for the profiles in `MIDAS_BROWSERS`: Playwright, or
 * WebdriverIO for the `<browser>@<version>` profiles. Vitest runs a project's
 * instances with one kind of provider, so the two can't be mixed in one run.
 */
export const browserProvider = (profileNames = selectedProfiles()) => {
  const realCount = profileNames.filter(name => parseRealProfile(name)).length
  if (realCount === 0) return playwright()
  if (realCount === profileNames.length) return webdriverio()
  throw new Error(
    `MIDAS_BROWSERS can't mix Playwright profiles with <browser>@<version> profiles: ${profileNames.join(', ')}`,
  )
}

/**
 * Vitest browser instances for the profiles in `MIDAS_BROWSERS`, one per
 * profile and variant. Pass variants to run every profile in several setups,
 * e.g. a desktop and a mobile viewport.
 *
 * @example
 * browser: {
 *   provider: browserProvider(),
 *   instances: browserInstances([
 *     { name: 'desktop', viewport: { width: 1024, height: 768 } },
 *     { name: 'mobile', viewport: { width: 320, height: 568 } },
 *   ]),
 * }
 */
export const browserInstances = (
  variants: Partial<BrowserInstanceOption>[] = [{}],
  profileNames = selectedProfiles(),
): BrowserInstanceOption[] =>
  profileNames.flatMap(profileName =>
    variants.map(variant =>
      toInstance(profileName, variant, profileNames.length > 1),
    ),
  )
