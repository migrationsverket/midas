/**
 * Shared setup for visual regression tests, added to every package's visual
 * project by defineVisualConfig (after the package's own vitest.setup.mts).
 */

import { afterAll, beforeAll, beforeEach, vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'

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
