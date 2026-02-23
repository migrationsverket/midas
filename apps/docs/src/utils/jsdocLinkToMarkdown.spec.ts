import { describe, expect, it } from 'vitest'
import { jsdocLinkToMarkdown } from './jsdocLinkToMarkdown'

describe('jsdocLinkToMarkdown', () => {
  it('should be able to parse comments with a single link', async () => {
    expect(
      jsdocLinkToMarkdown(`
        Replace base component with any Client Side Routing link instead.
        @see {@link https://designsystem.migrationsverket.se/dev/client-side-routing/|Client side routing}
      `),
    ).toBe(`
        Replace base component with any Client Side Routing link instead.
         . See [Client side routing](https://designsystem.migrationsverket.se/dev/client-side-routing).`)

    expect(
      jsdocLinkToMarkdown('@see {@link https://lucide.dev/icons/|Lucide}'),
    ).toBe(' . See [Lucide](https://lucide.dev/icons).')
  })
})
