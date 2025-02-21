import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import { mockedNow } from './utils/time'

// Sets a fixed date for all tests
jest.useFakeTimers({
  now: mockedNow.getTime(),
  doNotFake: ['setTimeout', 'clearTimeout'],
})

expect.extend(toHaveNoViolations)
