import { getHeadingLevel } from './getHeadingLevel'

describe('getHeadingLevel', () => {
  it('should render a h1', () => {
    expect(getHeadingLevel({ component: 'h1' })).toBe(1)
    expect(getHeadingLevel({ variant: 'h1' })).toBe(1)
    expect(getHeadingLevel({ variant: 'h2', component: 'h1' })).toBe(1)
    expect(getHeadingLevel({ component: 'h1', variant: 'h3' })).toBe(1)
    expect(getHeadingLevel({ component: 'h1', variant: 'h4' })).toBe(1)
    expect(getHeadingLevel({ component: 'h1', variant: 'h5' })).toBe(1)
  })

  it('should not render a h1', () => {
    expect(getHeadingLevel({ variant: 'h1', component: 'h2' })).toBe(2)
    expect(getHeadingLevel({ component: 'h2' })).toBe(2)
    expect(getHeadingLevel({ variant: 'h2' })).toBe(2)
    expect(getHeadingLevel({ component: 'h3', variant: 'h2' })).toBe(3)
    expect(getHeadingLevel({ component: 'h4', variant: 'h3' })).toBe(4)
    expect(getHeadingLevel({ component: 'h5', variant: 'h4' })).toBe(5)
    expect(getHeadingLevel({ component: 'h4', variant: 'h5' })).toBe(4)
  })
})
