import { describe, expect, it } from 'vitest'
import { jsdocLinkToMarkdown } from './jsdocLinkToMarkdown'

describe('jsdocLinkToMarkdown', () => {
  it('should be able to parse comments with a single link', async () => {
    expect(
      jsdocLinkToMarkdown(
        [
          'Replace base component with any Client Side Routing link instead.',
          '@see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}',
        ].join('\n'),
      ),
    ).toBe(
      [
        'Replace base component with any Client Side Routing link instead.',
        'See [Client side routing](https://designsystem.migrationsverket.se/dev/client-side-routing/)',
      ].join('\n'),
    )

    expect(
      jsdocLinkToMarkdown('@see {@link https://lucide.dev/icons/|Lucide}'),
    ).toBe('See [Lucide](https://lucide.dev/icons/)')

    expect(
      jsdocLinkToMarkdown('some text {@link https://lucide.dev/icons/|Lucide}'),
    ).toBe('some text [Lucide](https://lucide.dev/icons/)')

    expect(
      jsdocLinkToMarkdown('some text [Lucide](https://lucide.dev/icons/)'),
    ).toBe('some text [Lucide](https://lucide.dev/icons/)')

    expect(
      jsdocLinkToMarkdown(
        'Add an icon from lucide-react\n@see {@link https://lucide.dev/icons/ Lucide}',
      ),
    ).toBe(
      'Add an icon from lucide-react\nSee [Lucide](https://lucide.dev/icons/)',
    )
  })

  it('should be able to parse comments with multiple links', async () => {
    expect(
      jsdocLinkToMarkdown(
        [
          'Returns whether the table can go to the next page.',
          '@link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcannextpage)',
          '@link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)',
        ].join('\n'),
      ),
    ).toBe(
      [
        'Returns whether the table can go to the next page.',
        '[API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcannextpage)',
        '[Guide](https://tanstack.com/table/v8/docs/guide/pagination)',
      ].join('\n'),
    )

    expect(
      jsdocLinkToMarkdown(
        [
          'some text',
          '@see @link [Link](http://link.com)',
          '@see {@link https://link.com/|Link}',
        ].join('\n'),
      ),
    ).toBe(
      [
        'some text',
        'See [Link](http://link.com)',
        'See [Link](https://link.com/)',
      ].join('\n'),
    )
  })
})
