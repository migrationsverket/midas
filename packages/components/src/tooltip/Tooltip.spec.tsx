import { render, screen } from '@testing-library/react'
import { Tooltip, TooltipTrigger } from './'
import { Button } from '../button'
import { Save } from 'lucide-react'
import { axe } from 'jest-axe'
import user from '../../tests/utils/user'

const label = 'Spara'
const testID = 'test'
const testClass = 'test'

describe('Tooltip', () => {
  beforeEach(() => {
    render(
      <TooltipTrigger>
        <Button
          variant='tertiary'
          aria-label={label}
        >
          <Save />
        </Button>
        <Tooltip
          data-testid={testID}
          className={testClass}
        >
          Spara
        </Tooltip>
      </TooltipTrigger>,
    )
  })

  it('should render successfully', () => {
    expect(screen.getByLabelText(label)).toBeTruthy()
  })

  it('should have no accessibility violations in default state', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    await user.tab()
    expect(screen.getByTestId(testID)).toHaveClass('tooltip', testClass)
  })
})
