import { afterAll, beforeAll, vi } from 'vitest'
import '@midas-ds/components/default.css'

beforeAll(() => {
  // Enable RAC Virtualizer in tests
  vi.stubGlobal('process', { env: { VIRT_ON: true } })
})

afterAll(() => {
  vi.unstubAllGlobals()
})
