import { getCSSVariableName } from './utils'

describe('getCSSVariableName', () => {
  it('should join lower cased paths with dashes', () => {
    expect(getCSSVariableName({ path: ['background'] })).toBe(
      '--midas-background',
    )
    expect(getCSSVariableName({ path: ['background', 'hover'] })).toBe(
      '--midas-background-hover',
    )
  })

  it('should join camel cased paths with dashes', () => {
    expect(getCSSVariableName({ path: ['text', 'onColor'] })).toBe(
      '--midas-text-on-color',
    )
  })
})
