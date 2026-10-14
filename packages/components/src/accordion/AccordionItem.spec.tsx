import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './AccordionItem.stories'
import { render } from '../../test-utils'

const {
  Default,
  Success,
  Info,
  Warning,
  Important,
  TypeWithoutContained,
  ContentBackgroundNeutral,
  ContentBackgroundInherit,
} = composeStories(stories)

const TRANSPARENT = 'rgba(0, 0, 0, 0)'

const getContentBackground = (element: Element) =>
  getComputedStyle(element).backgroundColor

describe('given a Default AccordionItem', async () => {
  it('should accept a function as children', async () => {
    const { getByRole, getByText } = await render(
      <Default>
        {({ isExpanded }) => (isExpanded ? 'Im expanded' : 'Im not expanded')}
      </Default>,
    )
    await expect.element(getByText('Im not expanded')).toBeInTheDocument()
    await getByRole('button').click()
    await expect.element(getByText('Im not expanded')).not.toBeInTheDocument()
    await expect.element(getByText('Im expanded')).toBeVisible()
  })
})

describe('given an AccordionItem with type = "success"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Success />)
    await expect.element(getByLabelText('okay')).toBeInTheDocument()
  })

  it('should be possible to replace the aria-label for the icon', async () => {
    const { getByLabelText } = await render(
      <Success iconAriaLabel='bekräftat' />,
    )
    await expect.element(getByLabelText('bekräftat')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "info"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Info />)
    await expect.element(getByLabelText('information')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "warning"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Warning />)
    await expect.element(getByLabelText('warning')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "important"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Important />)
    await expect
      .element(getByLabelText('important information'))
      .toBeInTheDocument()
  })
})

describe('given an AccordionItem with type but without isContained', async () => {
  it('should not render the status icon', async () => {
    const { container } = await render(<TypeWithoutContained />)
    expect(container.querySelector('svg[aria-label]')).toBeNull()
  })
})

describe('given an AccordionItem with contentBackground', async () => {
  it('should paint a neutral background on the content by default', async () => {
    const { getByText } = await render(
      <Success defaultExpanded>Content</Success>,
    )
    await expect.element(getByText('Content')).toBeVisible()
    expect(getContentBackground(getByText('Content').element())).not.toBe(
      TRANSPARENT,
    )
  })

  it('should paint a neutral background on the content when set to "neutral"', async () => {
    const { getByText } = await render(
      <ContentBackgroundNeutral defaultExpanded>
        Content
      </ContentBackgroundNeutral>,
    )
    await expect.element(getByText('Content')).toBeVisible()
    expect(getContentBackground(getByText('Content').element())).not.toBe(
      TRANSPARENT,
    )
  })

  it('should let the item background show through when set to "inherit"', async () => {
    const { getByText } = await render(
      <ContentBackgroundInherit defaultExpanded>
        Content
      </ContentBackgroundInherit>,
    )
    await expect.element(getByText('Content')).toBeVisible()
    expect(getContentBackground(getByText('Content').element())).toBe(
      TRANSPARENT,
    )
  })

  it('should map the deprecated hasBackground={false} to "inherit"', async () => {
    const { getByText } = await render(
      <Success
        defaultExpanded
        hasBackground={false}
      >
        Content
      </Success>,
    )
    await expect.element(getByText('Content')).toBeVisible()
    expect(getContentBackground(getByText('Content').element())).toBe(
      TRANSPARENT,
    )
  })

  it('should let contentBackground win over the deprecated hasBackground', async () => {
    const { getByText } = await render(
      <Success
        defaultExpanded
        hasBackground={false}
        contentBackground='neutral'
      >
        Content
      </Success>,
    )
    await expect.element(getByText('Content')).toBeVisible()
    expect(getContentBackground(getByText('Content').element())).not.toBe(
      TRANSPARENT,
    )
  })
})
