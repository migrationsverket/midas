import { playwright } from '@vitest/browser-playwright'
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

export type BrowserProfile = keyof typeof profiles

/**
 * The profiles to run, from `MIDAS_BROWSERS`: a comma separated list of
 * profile names, or `all`. Defaults to Chromium.
 */
export const selectedProfiles = (
  value = process.env.MIDAS_BROWSERS,
): BrowserProfile[] => {
  if (!value?.trim()) return ['chromium']
  if (value.trim() === 'all') return Object.keys(profiles) as BrowserProfile[]

  const names = value.split(',').map(name => name.trim())
  const unknown = names.filter(name => !(name in profiles))
  if (unknown.length > 0) {
    throw new Error(
      `Unknown MIDAS_BROWSERS profile: ${unknown.join(', ')}. Use any of ${Object.keys(profiles).join(', ')} or all.`,
    )
  }
  return names as BrowserProfile[]
}

const toInstance = (
  profileName: BrowserProfile,
  variant: Partial<BrowserInstanceOption>,
  /** Add the profile to the name, when running several profiles */
  suffix: boolean,
): BrowserInstanceOption => {
  const profile: Profile = profiles[profileName]
  // Vitest needs a unique name per instance, and two profiles can share an
  // engine. A single profile keeps the variant's name as is
  const name = !suffix
    ? variant.name
    : variant.name
      ? `${variant.name} (${profileName})`
      : profileName
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
 * Vitest browser instances for the profiles in `MIDAS_BROWSERS`, one per
 * profile and variant. Pass variants to run every profile in several setups,
 * e.g. a desktop and a mobile viewport.
 *
 * @example
 * browser: {
 *   provider: playwright(),
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
