import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { Bell } from 'lucide-react'
import { render as renderWithFocus } from '../../test-utils'
import { render } from 'vitest-browser-react'
import * as stories from './Badge.stories'
import { Badge } from './Badge'
import { BadgeContainer } from './BadgeContainer'

const { NoLabel, WithLabel } = composeStories(stories)

describe('given a Badge without a label', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByTestId } = await renderWithFocus(<NoLabel className='test' />)

    await expect.element(getByTestId('badge')).toHaveClass('test')
  })
})

describe('given a BadgeContainer inside a width-constrained flex row', async () => {
  it('should not let the container shrink narrower than its icon, keeping the badge pinned to the top-right corner', async () => {
    const { getByTestId } = await render(
      // Mirrors a collapsed Sidebar's NavigationLink: a narrow flex row
      // where the icon+badge combo used to be squeezed below the icon's
      // own width, pulling the badge inward instead of onto its corner.
      <div style={{ display: 'flex', width: '10px' }}>
        <BadgeContainer>
          {/* flexShrink: 0 mirrors NavigationLink.module.css's `svg { flex-shrink: 0 }` —
              the icon must refuse to shrink for this to reproduce the real bug. */}
          <Bell
            size={20}
            style={{ flexShrink: 0 }}
          />
          <Badge data-testid='badge'>{WithLabel.args?.children}</Badge>
        </BadgeContainer>
      </div>,
    )

    const badge = getByTestId('badge').element()
    const container = badge.parentElement as HTMLElement
    const icon = container.querySelector('svg') as SVGElement

    const containerRect = container.getBoundingClientRect()
    const iconRect = icon.getBoundingClientRect()
    const badgeRect = badge.getBoundingClientRect()

    expect(containerRect.width).toBeGreaterThanOrEqual(iconRect.width)
    const badgeCenterX = badgeRect.left + badgeRect.width / 2
    expect(badgeCenterX).toBeCloseTo(iconRect.right, 0)
  })
})
