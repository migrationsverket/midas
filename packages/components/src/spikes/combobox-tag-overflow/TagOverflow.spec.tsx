import { describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { options } from '@midas-ds/test-utils'
import { render } from '../../../test-utils'
import { ComboBox } from '../../combobox'
import { ListBoxItem } from '../../list-box'
import type { TagOverflow } from '../../combobox/ComboBoxTags'

const Field = ({
  tagOverflow,
  selectedCount,
  width = 400,
}: {
  tagOverflow: TagOverflow
  selectedCount: number
  width?: number
}) => (
  <div
    data-testid='wrapper'
    style={{ width }}
  >
    <ComboBox
      label='Frukt'
      placeholder='Välj eller sök frukt'
      items={options}
      selectionMode='multiple'
      defaultValue={options.slice(0, selectedCount).map(({ id }) => id)}
      tagOverflow={tagOverflow}
    >
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
  </div>
)

const fieldContent = () =>
  page.getByRole('combobox').element().parentElement as HTMLElement

const rowTops = () =>
  new Set(
    [...fieldContent().children].flatMap(child =>
      [
        ...child.querySelectorAll('[role="row"]'),
        ...(child.matches('input') ? [child] : []),
      ].map(element =>
        Math.round(
          element.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ),
      ),
    ),
  )

/** The "+n" chip, not the hidden copy that measures how wide it can get */
const moreChip = () =>
  document.querySelector<HTMLElement>(
    '[class*="moreTags"]:not([data-measure-more])',
  )

const isInside = (element: Element, container: Element) => {
  const rect = element.getBoundingClientRect()
  const box = container.getBoundingClientRect()
  return rect.left >= box.left - 0.5 && rect.right <= box.right + 0.5
}

describe("tagOverflow='scroll'", () => {
  it('should keep the field the same height however many tags are selected', async () => {
    const { rerender } = await render(
      <Field
        tagOverflow='scroll'
        selectedCount={1}
      />,
    )
    const height = fieldContent().getBoundingClientRect().height

    await rerender(
      <Field
        tagOverflow='scroll'
        selectedCount={20}
        key='many'
      />,
    )

    expect(fieldContent().getBoundingClientRect().height).toBe(height)
    expect(fieldContent().scrollWidth).toBeGreaterThan(
      fieldContent().clientWidth,
    )
    expect(rowTops().size).toBe(1)
  })

  it('should scroll to the input when it gets focus, and to a tag when it gets focus', async () => {
    await render(
      <Field
        tagOverflow='scroll'
        selectedCount={20}
      />,
    )
    const input = page.getByRole('combobox')

    await userEvent.click(page.getByText('Frukt'))
    await expect.element(input).toHaveFocus()
    expect(isInside(input.element(), fieldContent())).toBe(true)

    // Shift+Tab reaches the focused tag's Remove button first, then the tag
    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })
    expect(document.activeElement?.getAttribute('role')).toBe('row')
    await userEvent.keyboard('[Home]')
    const firstTag = page.getByRole('row').first()
    await expect.element(firstTag).toHaveFocus()
    expect(isInside(firstTag.element(), fieldContent())).toBe(true)
  })

  it('should keep the input in view after picking another item', async () => {
    await render(
      <Field
        tagOverflow='scroll'
        selectedCount={20}
      />,
    )
    const input = page.getByRole('combobox')

    await userEvent.click(input)
    await userEvent.keyboard('Vattenmelon')
    await userEvent.keyboard('[ArrowDown][Enter]')

    await expect.element(input).toHaveValue('')
    expect(isInside(input.element(), fieldContent())).toBe(true)
  })
})

describe("tagOverflow='collapse'", () => {
  it('should show the tags that fit and "+n" for the rest, on one row', async () => {
    await render(
      <Field
        tagOverflow='collapse'
        selectedCount={20}
      />,
    )

    await expect.poll(moreChip).not.toBeNull()
    const tags = page.getByRole('row').elements()
    const more = moreChip() as HTMLElement
    await expect.element(more).toBeVisible()

    // The chip shows "+n" and has "n more selected" for screen readers
    const hiddenCount = Number(
      more.querySelector('[aria-hidden]')?.textContent?.slice(1),
    )
    expect(tags.length).toBeGreaterThan(0)
    expect(tags.length + hiddenCount).toBe(20)
    expect(rowTops().size).toBe(1)
    expect(fieldContent().scrollWidth).toBe(fieldContent().clientWidth)
    expect(isInside(more, fieldContent())).toBe(true)
    expect(isInside(page.getByRole('combobox').element(), fieldContent())).toBe(
      true,
    )
  })

  it('should tell screen readers how many more are selected', async () => {
    await render(
      <Field
        tagOverflow='collapse'
        selectedCount={20}
      />,
    )

    await expect.poll(moreChip).not.toBeNull()
    const tagCount = page.getByRole('row').elements().length
    await expect
      .element(page.getByText(`${20 - tagCount} more selected`))
      .toBeInTheDocument()
  })

  it('should not show "+n" when every tag fits', async () => {
    await render(
      <Field
        tagOverflow='collapse'
        selectedCount={2}
      />,
    )

    await expect.element(page.getByRole('row')).toHaveLength(2)
    expect(moreChip()).toBeNull()
  })

  it('should show more tags when the field gets wider', async () => {
    await render(
      <Field
        tagOverflow='collapse'
        selectedCount={20}
        width={300}
      />,
    )
    await expect.poll(moreChip).not.toBeNull()
    const narrowCount = page.getByRole('row').elements().length
    expect(narrowCount).toBeGreaterThan(0)

    page.getByTestId('wrapper').element().setAttribute('style', 'width: 700px')

    await expect
      .poll(() => page.getByRole('row').elements().length)
      .toBeGreaterThan(narrowCount)
  })
})
