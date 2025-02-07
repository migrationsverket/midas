import { render } from '@testing-library/react'

import { Tooltip, TooltipTrigger } from './'
import { Button } from '../button'
import { Save } from 'lucide-react'

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TooltipTrigger>
        <Button
          variant='tertiary'
          aria-label='Spara'
        >
          <Save />
        </Button>
        <Tooltip>Spara</Tooltip>
      </TooltipTrigger>
    )
    expect(baseElement).toBeTruthy()
  })
})
