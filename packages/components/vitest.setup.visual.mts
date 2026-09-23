import { afterAll, beforeAll, vi } from 'vitest'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'
import './vitest.setup'

beforeAll(() => {
  // Only mocks Date.*/new Date() (fake timers aren't enabled), so this
  // doesn't touch setTimeout/rAF — toMatchScreenshot's own internal
  // stability polling relies on those running for real.
  vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))
})

afterAll(() => {
  vi.useRealTimers()
})
