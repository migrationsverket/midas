import { render, screen } from '@testing-library/react'
import { Tag, TagGroup } from './Tag'
import { axe } from 'jest-axe'

const label = 'label'
const testID = 'test'
const testClass = 'test'

describe('Tag', () => {
  beforeEach(() => {
    render(
      <TagGroup aria-label={label}>
        <Tag
          textValue='value'
          data-testid={testID}
          className={testClass}
        >
          Item A
        </Tag>
      </TagGroup>,
    )
  })

  it('should render successfully', () => {
    expect(screen.getByLabelText(label)).toBeTruthy()
  })

  it('should have no accessibility violations in default state', async () => {
    expect(await axe(screen.getByTestId(testID))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(screen.getByTestId(testID)).toHaveClass('tag', testClass)
  })
})
