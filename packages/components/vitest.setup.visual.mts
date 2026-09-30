import { afterAll, beforeAll, beforeEach, vi } from 'vitest'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'
import { userEvent } from 'vitest/browser'
import './vitest.setup'

// Clear hover states and park the cursor before taking a screenshot
// https://github.com/vitest-dev/vitest/discussions/9878
beforeEach(async () => {
  await userEvent.unhover(document.body)
})

beforeAll(() => {
  // Only mocks Date.*/new Date() (fake timers aren't enabled), so this
  // doesn't touch setTimeout/rAF — toMatchScreenshot's own internal
  // stability polling relies on those running for real.
  vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))
})
afterAll(() => {
  vi.useRealTimers()
})
