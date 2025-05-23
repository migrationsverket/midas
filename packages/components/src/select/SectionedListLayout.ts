import { ListLayout, ListLayoutOptions, Size } from 'react-aria-components'

export class SectionedListLayout<
  T,
  O extends ListLayoutOptions = ListLayoutOptions,
> extends ListLayout<T, O> {
  /**
   * When using the ListLayout our scroll container height is not calculated properly when the content is partially sectioned.
   * ```ts
   * const partiallySectionedContent = [
   *  {
   *    name: 'fruit section',
   *    children: [{ id: 'kiwi', name: 'Kiwi' }]
   *  },
   *  // berries have no section, because it's optional
   *  { id: 'lingonberries', name: 'Lingonberries' }
   * ];
   * ```
   * If we load the layout info for each key in the collection the calculation is correct.
   *
   * This might not be optional for performance, FYI
   */
  getContentSize(): Size {
    const keys = this?.virtualizer?.collection.getKeys()

    Array.from(keys || []).forEach(key => {
      this.getLayoutInfo(key)
    })

    return this.contentSize
  }
}
