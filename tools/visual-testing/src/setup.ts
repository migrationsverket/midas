/**
 * Shared setup for visual regression tests, added by visualConfig.
 */

import { afterAll, beforeAll, beforeEach, vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'

// The package's own test setup, if it has one: global CSS and fonts the
// screenshots depend on. A leading slash makes the glob relative to the Vite
// root (the package), and a missing file just matches nothing
import.meta.glob('/vitest.setup.mts', { eager: true })

// Clear hover states and park the cursor before taking a screenshot
// https://github.com/vitest-dev/vitest/discussions/9878
beforeEach(async () => {
  await userEvent.unhover(document.body)
})

beforeAll(() => {
  // Only mocks Date.*/new Date() (fake timers aren't enabled), so this
  // doesn't touch setTimeout/rAF: toMatchScreenshot's own stability polling
  // relies on those running for real. Calendars open on the current month,
  // so this is what keeps their snapshots stable.
  vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))
})

afterAll(() => {
  vi.useRealTimers()
})
