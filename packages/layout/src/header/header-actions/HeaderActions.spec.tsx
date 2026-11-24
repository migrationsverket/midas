import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Settings } from 'lucide-react'
import { HeaderActions } from './HeaderActions'
import { HeaderAction } from '../header-action'

describe('given an icon-only HeaderAction', () => {
  it('is 40 by 40', async () => {
    const { getByRole } = await render(
      <HeaderActions>
        <HeaderAction
          aria-label='Inställningar'
          icon={<Settings size={20} />}
        />
      </HeaderActions>,
    )
    const { width, height } = getByRole('button', { name: 'Inställningar' })
      .element()
      .getBoundingClientRect()

    expect({ width, height }).toEqual({ width: 40, height: 40 })
  })
})
