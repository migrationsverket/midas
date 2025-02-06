import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Logo, LogoProps } from './Logo'
import { axe } from 'jest-axe'

describe('given a default Logo', () => {
  let rendered: RenderResult
  beforeEach(() => {
    rendered = render(
      <LogoTest
        primary
        background
      />
    )
  })

  it('should render successfully', () => {
    expect(rendered).toBeTruthy()
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(await rendered.findByRole('img'))).toHaveNoViolations()
  })
})

const LogoTest = (props: LogoProps) => <Logo {...props} />
