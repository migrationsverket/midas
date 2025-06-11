import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'
import { axe } from 'jest-axe'

const testID = 'logo'
const testClass = 'test'

describe('given a default Logo', () => {
  beforeEach(() => {
    render(
      <Logo
        primary
        data-testid={testID}
        className={testClass}
      />,
    )
  })

  it('should render successfully', () => {
    expect(screen.getByTestId(testID)).toBeTruthy()
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(testID))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(screen.getByTestId(testID)).toHaveClass('container', testClass)
  })
})
