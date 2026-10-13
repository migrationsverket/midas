/**
 * Shared setup for screen reader regression tests, added by
 * screenReaderConfig.
 */

import { afterAll, beforeAll, vi } from 'vitest'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'

// The package's own test setup, if it has one: global CSS decides what is
// hidden from a screen reader. A leading slash makes the glob relative to the
// Vite root (the package), and a missing file just matches nothing
import.meta.glob('/vitest.setup.mts', { eager: true })

beforeAll(() => {
  // Only mocks Date.*/new Date(), so calendars read out the same month
  vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))
})

afterAll(() => {
  vi.useRealTimers()
})
