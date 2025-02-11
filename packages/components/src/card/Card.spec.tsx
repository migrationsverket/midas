import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Card } from './'
import user from '../../tests/utils/user'

const linkText = 'Läs mer'
const link = { children: linkText, href: '#' }
const title = 'Rubrik'
const content = 'Lorem ipsum'
const testId = 'card'

describe('given a default card', () => {
  beforeEach(() => {
    render(
      <Card
        data-testid={testId}
        title={title}
        content={content}
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(testId))).toHaveNoViolations()
  })

  it('should be possible to focus the link', async () => {
    expect(screen.getByText(linkText)).not.toHaveFocus()

    // focus the link
    await user.tab()

    expect(screen.getByText(linkText)).toHaveFocus()
  })
})

describe('given a card with background', () => {
  beforeEach(() => {
    render(
      <Card
        data-testid={testId}
        title={title}
        content={content}
        background
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(testId))).toHaveNoViolations()
  })
})

// TODO: maybe add proper image
describe('given a card with image', () => {
  beforeEach(() => {
    render(
      <Card
        data-testid={testId}
        title={title}
        content={content}
        image={{ source: '', description: '' }}
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(screen.getByTestId(testId))).toHaveNoViolations()
  })
})
