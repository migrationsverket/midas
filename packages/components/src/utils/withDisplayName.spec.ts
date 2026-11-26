import { describe, expect, it } from 'vitest'
import * as reactAria from 'react-aria-components'

describe('given the components Midas re-exports from React Aria', () => {
  // Every component's index, since the root index can't be imported here
  const midas = Object.assign(
    {},
    ...Object.values(
      import.meta.glob<Record<string, unknown>>('../*/index.ts', {
        eager: true,
      }),
    ),
  ) as Record<string, unknown>
  const reactAriaExports = new Set<unknown>(Object.values(reactAria))
  const reExported = Object.entries(midas).filter(
    ([name, value]) =>
      /^[A-Z]/.test(name) &&
      // Contexts and layouts aren't rendered as elements
      !/(Context|Layout)$/.test(name) &&
      reactAriaExports.has(value),
  )

  it('should find them', () => {
    expect(reExported.map(([name]) => name)).toContain('MenuTrigger')
  })

  it.each(reExported)(
    'should name %s, so it shows up by name in code examples and DevTools',
    (name, component) => {
      expect((component as { displayName?: string }).displayName).toBe(name)
    },
  )
})
